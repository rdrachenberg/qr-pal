from flask import Flask, request, send_file, jsonify, request, render_template_string
import qrcode
from io import BytesIO
import base64

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
    
    print(render_template_string(html))
    # Return the image directly to the browser
    return render_template_string(html)

if __name__ == '__main__':
    app.run(debug=True)
