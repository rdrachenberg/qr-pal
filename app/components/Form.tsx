import { Dispatch, SetStateAction, useState, FunctionComponent } from "react"

interface Props {
    setLink: Dispatch<string>,
    link: string
}

export const Form: FunctionComponent<Props> =  (props: Props) => {
    

    return (
        <div>
            <input 
                id="link" 
                name="link" 
                placeholder="Link to make QR" 
                onChange={(e) => props.setLink(e.target.value)}  
                className='font-sans w-[300px] sm:w-[400px]  p-2 m-3 mt-8 rounded border border-gray-300 bg-light invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer text-black'
                required   
            />
        </div>
    )
}