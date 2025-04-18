import Logo from "./Logo";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className=" flex lg:gap-8 gap-4 items-center justify-center flex-row h-[10vh] w-full mt-8 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
            <Logo />
            <p>
                Coded by <span className="text-accent">Brinis Abderahmen </span>
            </p>
            <span className="text-xl flex gap-4 ">
                <a
                    href="https://github.com/d3d3ds6"
                    className="hover:text-secondary"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/brinis-abderahmen/"
                    className="hover:text-secondary"
                >
                    <FaLinkedin />
                </a>
            </span>
        </footer>
    );
}

export default Footer;
