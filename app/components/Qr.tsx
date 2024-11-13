import { useEffect, useState } from "react";
import Image from "next/image";
import { Form } from "./Form";
export const Qr = () => {
    const [qr, setQr] = useState('');
    const [link, setLink] = useState<string>('');

    const staticData = JSON.stringify({
        "link": `"${link}"`,
        "filename": "ryanqrcode.png"
    });

    async function handleQrRequest() {
        const poster = fetch('/api/qr', {
        method: 'POST',
        body: staticData,
        headers: {
            'Content-Type': 'application/json'
        }
        })

        const data = await (await poster).text();
        
        // console.log(data);

        if(data){
        setQr(data);
        }
        
        return data
    }

    useEffect(() => {
        if(link) {
            console.log(link);
        }
    }, [link])

    return (
        <div className="flex flex-col justify-center align-middle items-center">
            {qr && 
              <div className='flex flex-col justify-center align-middle items-center mb-5'>
                <Image width={200} height={100} src={qr} alt='qr code' className='rounded-xl'/>
              </div>
            }
            <Form setLink={setLink} link={link}/>
            <button disabled={!link} className=' w-full bg-black text-4xl text-white rounded-full p-5' onClick={handleQrRequest}>Get QR Code</button>
        </div>
    )
}