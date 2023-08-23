
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import Image from "next/image";
import Logo from '@/assets/images/logo.png';
import Link from "next/link";


function Footer() {
    return (
        <footer className="bg-gradient-to-r from-[#761574] via-[#b340b1] to-[#761574]">
            <div className="flex flex-col items-center py-16 gap-5">
                <div className="flex">
                <Image src={Logo} alt="hero" width={40} height={40} />
                <span className='text-2xl cursor-pointer font-bold text-white tracking-wider pl-3 text-[1.2rem]'>CONSOLDES</span>
                </div>
                <div className="flex gap-5">
                    <Link href="https://www.youtube.com/@Consoldes" target="_blank"><AiFillYoutube size={20} className="text-white" /></Link>
                    <Link href="instagram.com/consoldes.tech/" target="_blank">  <BsInstagram size={20}className="text-white" /></Link>
                    <Link href="https://www.linkedin.com/company/70925388/admin/feed/posts/" target="_blank"><BsLinkedin size={20} className="text-white"/> </Link>
                    <Link href="https://www.facebook.com/consoldes.tech/" target="_blank"><FaFacebookF size={20} className="text-white"/></Link>
                    <Link href="https://twitter.com/consoldes" target="_blank"><AiOutlineTwitter size={20} className="text-white"/></Link>
                </div>
                <p className="font-medium text-white">© 2023 Consoldes, All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer