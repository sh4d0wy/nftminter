"use client"
import React, { useState } from 'react'
import ConnectButton from './ConnectButton'
import Link from 'next/link'

const Navbar = () => {
    const options = [{title:'My NFTs',link:'/'},{title:'Mint NFTs',link:'/mint'}]
    const [selectedOption,setSelectedOption] = useState(0);
  return (
    <div className='w-full px-12 py-3 flex justify-around items-center bg-[#C8F5FE] text-[#4AA8AC] font-bold shadow-lg shadow-[#8DD9E9]'>

        <h1 className='font-extrabold text-2xl px-2'>NFTMinter  </h1>
        {options.map((option,index)=>{
            return(
                <>
                <Link href={option.link} key={index}>
                    <div className={`px-5 cursor-pointer text-lg py-2 ${index==selectedOption&&"bg-[#86D5E5] rounded-full shadow-sm shadow-[#86D5E5]"}`} key={index} onClick={()=>setSelectedOption(index)}>
                        {option.title}
                    </div>
                </Link>
                </>
            )
        })}
        <ConnectButton/>
    </div>
  )
}

export default Navbar