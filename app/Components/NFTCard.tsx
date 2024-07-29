import Image from 'next/image'
import React from 'react'
import { FaCopy } from 'react-icons/fa'

const NFTCard = () => {
  return (
    <div className='w-[20rem] h-[32rem] rounded-xl shadow-[#8DD9E9] shadow-xl'>    
    <div className='w-full h-[55%]'>
        <Image src="/nft2.png" className='w-full h-full rounded-lg '
         alt="alt" width={300} height={300} />
    </div>
    <div className='font-bold text-xl w-full text-center px-5 py-3 text-[#4AA8AC]'>
        Panda1
    </div>
    <div className='px-8 flex items-center  justify-between'>
        <div className='text-lg font-bold text-[#4aabac]'>Owner:</div>
        <div className='text-sm flex gap-2 font-bold text-[#4aabac] items-center'>
            <Image src="/profile.png" alt="profile" width={100} height={100} className='rounded-full w-[1.5rem] h-[1.5rem]'/>
            <span>0x123123v4213...</span>
            <FaCopy className='text-lg'/>
        </div>
    </div>
    <div className='flex flex-col gap-2 my-2'>
        <div  className='px-8 text-lg text-[#4aabac] font-bold '>
            Transfer To:
        </div>
        <div className='px-8'>
            <input type="text" placeholder='Enter Address of Recipient' className='bg-white rounded-full w-full h-full px-4 py-2 outline-none shadow-sm shadow-[#4aa8ac]'/>
        </div>
        </div>
        <div className='w-full text-center'>
            <button className='bg-[#4aabac] text-white rounded-full w-[30%] h-[
            2rem] text-sm font-bold py-2 my-2 shadow-lg shadow-[#C8F5FE]'>Send</button>
        </div>
    </div>
  )
}

export default NFTCard