
import Link from "next/link"
import Header from "./header"
import Image from "next/image"
export default function Home() {
  return(
    <>
     <div className="bg-[url('/background.png')] bg-cover h-96">
      <h1 className="text-center text-4xl font-bold justify-between">WELCOME TO</h1>
      <h1 className="text-center text-4xl font-bold"> AW Outfits</h1>
</div>
 {/* product section */}
 <div className="border shadow-md  p-10 h-60 inline flex-col items-left">
  <img src="outfits10.jpg" alt="product image"className="w-40 h-40 object-cover" />
  <h2 className="text-base font-semibold mt-1">Product Name</h2>
  <p className="text-xs">Short Description</p>
</div>
<div className="border shadow-md  p-10 h-60 flex flex-col items-left">
  <img src="outfits10.jpg" alt="product image"className="w-40 h-40 object-cover" />
  <h2 className="text-base font-semibold mt-1">Product Name</h2>
  <p className="text-xs">Short Description</p>
</div>


 {/* <div className="flex border  w-96 h-70 gap-36 pt-5 pl-1">
  <div className="border p-4">
  <img src="/outfits10.jpg" alt="Product 1" className="w-200 h-50"/>
    <h2 className="text-xl font-bold mt-2">Product 1</h2>
    <p className="mt-1">Description of Product 1</p>
    </div>

    <div className="">
  <img src="/outfits10.jpg" alt="Product 1" className="w-70 h-70"/>
    <h2 className="text-xl font-bold mt-2">Product 1</h2>
    <p className="mt-1">Description of Product 1</p>
    </div>

    <div className="">
  <img src="/outfits10.jpg" alt="Product 1" className="w-70 h-70"/>
    <h2 className="text-xl font-bold mt-2">Product 1</h2>
    <p className="mt-1">Description of Product 1</p>
    </div>
  </div> */}
    </> 

    )
  }