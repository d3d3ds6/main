import logo from "../assets/logo.svg";

function Logo() {
    return (
        <div className="flex items-center flex-nowrap flex-shrink-0 flex-grow-0">
            <img src={logo} alt="logo" height="40" width="40" />
            <h1 className="text-xl font-[800] uppercase bg-gradient-to-r from-[#7A8FFA] to-[#E57AEE] bg-clip-text text-transparent">
                battoutaXbunbun
            </h1>
        </div>
    );
}

export default Logo;
