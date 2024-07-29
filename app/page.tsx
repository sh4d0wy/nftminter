import Image from "next/image";
import ConnectButton from "./Components/ConnectButton";
import Navbar from "./Components/Navbar";
import NFTCard from "./Components/NFTCard";

export default function Home() {
  return (
    <>
    <div className='w-full h-full flex flex-col px-20 py-4 items-center jusitfy-center gap-12'>
        <h1 className='text-[#4AA8AC] text-7xl font-extrabold'>My NFTs</h1>
        <div className="w-full h-full grid grid-cols-4 gap-5">
          <NFTCard/>
          <NFTCard/>
          <NFTCard/>
          <NFTCard/>
          <NFTCard/>
          <NFTCard/>
        </div>
    </div>
    </>
  );
}
