'use client'
import { useState } from "react"
import { Header } from "../components/Header";
import { Footer } from "../components/Fooler";

export default function Shorty() {
    const [linkToShorten, setLinkToShorten] = useState('');
    const [shortenedLink, setShortenedLink] = useState('');

    const bodyObject = JSON.stringify({
        link: linkToShorten
    });

    async function handleShortenClick() {
        const request = await fetch('/api/shorty', {
            method: 'POST',
            body: bodyObject,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const response = await request.text()
        console.log(response)
        setShortenedLink(response);
    }

    return (
        <div>
            <Header />
            <div className='flex min-h-screen flex-col bg-gradient-to-r from-blue-200 to-cyan-200 '>
                <div className='flex flex-col justify-center align-middle items-center mt-10'>
                {shortenedLink && <div className='text-3xl text-black rounded bg-white p-2'>{shortenedLink}</div>}
                    <input 
                        id="link" 
                        name="link" 
                        placeholder="Link to shorten" 
                        onChange={(e) => setLinkToShorten(e.target.value)}  
                        className='font-sans w-[300px] sm:w-[400px]  p-2 m-3 mt-8 rounded border border-gray-300 bg-light invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer text-black'
                        required
                        pattern=""
                    />
                    <button className=" w-[90%] sm:w-[25%] bg-black text-2xl text-white rounded-full p-5 hover:outline hover:outline-4 hover:outline-purple-200" onClick={handleShortenClick}>Make Short Link</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
