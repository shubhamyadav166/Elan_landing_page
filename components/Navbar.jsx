import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    // Screen disable when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isVisible ? "hidden" : "auto";

    }, [isVisible]);
    // mobile menu 
    const handleClick = () => {
        setOpen(!open)
        setIsVisible(!isVisible)
    }

    return (
        <header className="fixed top-0 left-0 items-center h-20 w-full z-50 bg-black backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-20">

                    {/* LEFT LOGO */}
                    <div className="flex items-center gap-2">
                        <img
                            src="/Elan-The-Statement-Sector-49-Sohna-Road-Gurgaon-Logo.webp"
                            alt="Elan The Statement"
                            className="h-15 text-white"
                        />
                    </div>

                    {/* DESKTOP MENU */}
                    <nav className="hidden lg:flex items-center gap-8 text-slate-200 text-sm lg:text-md font-medium">
                        <a href="#home" className="hover:text-gold">HOME</a>
                        <a href="#aboutus" className="hover:text-gold">ABOUT US</a>
                        <a href="#highlights" className="hover:text-gold">HIGHLIGHTS</a>
                        <a href="#amenities" className="hover:text-gold">AMENITIES</a>
                        <a href="#gallery" className="hover:text-gold">GALLERY</a>
                        <a href="#floorplan" className="hover:text-gold">FLOOR PLAN</a>
                        <a href="#location" className="hover:text-gold">LOCATION</a>
                        <a href="tel:+919289896500" className="font-semibold">
                            +91 9289896500
                        </a>
                    </nav>

                    {/* RIGHT SECTION */}
                    <div className="hidden lg:flex items-center gap-6 text-white">

                        <img
                            src="/_logo_Elan_Logo.png"
                            alt="TRS Infraventures"
                            className="h-15"
                        />
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        className="lg:hidden text-white"
                        onClick={handleClick}
                    >
                        {open ? <FaTimes size={28} /> : < AiOutlineMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="lg:hidden bg-black text-white px-6 py-6 space-y-4">
                    {[
                        "HOME",
                        "ABOUT US",
                        "HIGHLIGHTS",
                        "AMENITIES",
                        "GALLERY",
                        "FLOOR PLAN",
                        "LOCATION",
                    ].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(" ", "")}`}
                            className="block border-b border-gray-700 pb-2"
                            onClick={handleClick}
                        >
                            {item}
                        </a>
                    ))}

                    <a
                        href="tel:+919899055893"
                        className="block font-semibold pt-4"
                    >
                        +91 98990 55893
                    </a>
                </div>
            )}
        </header>
    );
};

export default Navbar;
