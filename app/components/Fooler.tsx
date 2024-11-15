export const Footer = () => {

    return (
        <div className='h-[50px] bg-gray-800 flex flex-row justify-center align-middle items-center sticky top-[100vh]'>
            <a href='https://ryan-drachenberg.vercel.app/about' target='_blank'>
                <div className='bg-gradient-to-r from-violet-200 to-pink-200 bg-clip-text text-transparent text-xl flex flex-row '>
                    <div className='mr-2'>Made with</div>
                    <div className="flex text-red-600">❤️</div> 
                    <div className='ml-2'>from Drac</div>
                </div>
            </a>
        </div>
    )
}