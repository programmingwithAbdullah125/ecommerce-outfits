import Link from "next/link"
import Image from "next/image"
import { headers } from "next/headers"
export default function Header() {
    return(
        <header className="flex justify-between bg-black h-24">
                {/* logo */}
        <div className="flex items-center">
            <Link href="/">
            <Image src="/logo.jpg"alt="its an image" width={50} height={50} className="rounded-full ml-4 border-4 border-white-500"/>
            </Link>4
            <h2 className="text-3xl font-semibold text-white pl-2">AW Outfits</h2>
        </div>
        {/* links */}
        <nav className="h-19">
            <ul className="flex gap-x-4 text-white p-4 space-x-5 "> 
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About us</Link>
                </li>
                <li>
                        <Link href="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link href="">Our Service</Link>
                    </li>
                    <li>
                        <Link href="/contact">Products</Link>
                    </li>
                    <li>
                        <input type="text" placeholder="Search here" className="border-2 border-gray-300"/> <button className="bg-yellow-500 text-white ">Search </button>
                    </li>
                
            </ul>
        </nav>
    </header>
    )
}

