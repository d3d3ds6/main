import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

function Logo() {
    return (
        <Link to="/" className="flex items-center flex-nowrap flex-shrink-0 flex-grow-0 no-underline">
            <img src={logo} alt="logo" height="40" width="40" />
            <h1 className="text-xl font-extrabold uppercase bg-gradient-to-r from-[#7A8FFA] to-[#E57AEE] bg-clip-text text-transparent">
                Movix
            </h1>
        </Link>
    );
}

export default Logo;