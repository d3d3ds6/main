import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { FaArrowLeft } from "react-icons/fa";

function Navbar() {
    const { pathname } = useLocation();

    return (
        <nav
            className="cursor-default flex items-center justify-center p-4 w-full"
            data-testid="navigation"
        >
            {/* when at home hide back button  */}
            {pathname !== "/" && (
                <Link to="/">
                    <div className="absolute left-8 top-5 flex items-center justify-center bg-gray-300 rounded-full bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 p-2 hover:text-accent">
                        <FaArrowLeft />
                    </div>
                </Link>
            )}
            <Logo />
        </nav>
    );
}

export default Navbar;
