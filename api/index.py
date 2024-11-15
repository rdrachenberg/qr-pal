from flask import Flask, request, send_file, jsonify, request, render_template_string
import qrcode
from io import BytesIO
import base64
import pyshorteners

app = Flask(__name__)

def generate_qr_code(link):
    """Generates a QR code for the given link and returns it as an in-memory image."""
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=6,
    )
    qr.add_data(link)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")
    return img

@app.route('/api/qr', methods=['POST'])
def qr_code_api():
    data = request.get_json()
    link = data.get("link")  # Default link
    
    # Generate the QR code
    img = generate_qr_code(link)
    
    # Create an in-memory binary stream to hold the image data
    img_io = BytesIO()
    img.save(img_io, 'PNG')
    img_io.seek(0)
    img_base64 = base64.b64encode(img_io.getvalue()).decode('utf-8')

    html = f"""data:image/png;base64,{img_base64}"""
    
    # print(render_template_string(html))
    # Return the image directly to the browser
    return render_template_string(html)

def generate_short_url(long_url):
  s = pyshorteners.Shortener()
  return s.tinyurl.short(long_url)

@app.route('/api/shorty', methods=['POST'])
def shorten_link_api():
    # make data object from JSON request
    data = request.get_json()
    # print(data)
    
    # get the link key and store the value
    long_url = data.get('link')
    # print(long_url)

    short_url = generate_short_url(long_url)
    # print(short_url)
    
    return render_template_string(short_url)

if __name__ == '__main__':
    app.app_context().push()
    app.run(debug=True)
