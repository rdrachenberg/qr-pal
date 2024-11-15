'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { Form } from "./Form";
import { useRouter } from "next/navigation";
export const Qr = () => {
    const [qr, setQr] = useState('');
    const [link, setLink] = useState<string>('');
    const router = useRouter();

    const staticData = JSON.stringify({
        "link": `"${link}"`,
        "filename": "ryanqrcode.png"
    });

    function handleShortyClick() {
        router.push('/shorty');
        console.log('shorty clicked')
    }

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
        <div className="flex flex-col justify-center align-middle items-center mt-10">
            {qr && 
              <div className='flex flex-col justify-center align-middle items-center mb-5'>
                <Image width={200} height={100} src={qr} alt='qr code' className='rounded-xl'/>
              </div>
            }
            <Form setLink={setLink} link={link}/>
            <button disabled={!link} className=' w-[90%] sm:w-[25%] bg-black text-2xl text-white rounded-full p-5 hover:outline hover:outline-4 hover:outline-purple-200 ' onClick={handleQrRequest}>Get QR Code</button>
            <div className='w-full flex flex-col justify-center align-middle items-center mt-[55vh]'>
                <button className=' w-[90%] sm:w-[20%] bg-gradient-to-r from-slate-900 to-slate-700 text-1xl rounded-full p-2 hover:outline hover:outline-4 hover:outline-purple-200 ' onClick={handleShortyClick}><div className='bg-gradient-to-r from-violet-200 to-pink-200 bg-clip-text text-transparent'>Go to link shortener</div></button>
            </div>
        </div>
    )
}