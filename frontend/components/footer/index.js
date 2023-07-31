
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";


function Footer() {
    return (
        <footer className="bg-[#edeef3]">
            <div className="flex flex-col items-center py-16 gap-5">
                <p>Consolde logo</p>
                <div className="flex gap-5">
                    <Link href="https://www.youtube.com/@Consoldes" target="_blank"><AiFillYoutube size={20} /></Link>
                    <Link href="instagram.com/consoldes.tech/" target="_blank">  <BsInstagram size={20} /></Link>
                    <Link href="https://www.linkedin.com/company/70925388/admin/feed/posts/" target="_blank"><BsLinkedin size={20} /> </Link>
                    <Link href="https://www.facebook.com/consoldes.tech/" target="_blank"><FaFacebookF size={20} /></Link>
                    <Link href="https://twitter.com/consoldes" target="_blank"><AiOutlineTwitter size={20} /></Link>
                </div>
                <p className="font-medium">© 2023 Consoldes, All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer