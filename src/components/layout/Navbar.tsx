import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { logo, menu, close } from "../../assets";
import { config } from "../../constants/config";

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-8">
      <nav
        className={`${
          styles.paddingX
        } flex items-center py-3 rounded-full max-w-4xl w-full backdrop-blur-lg ${
          scrolled ? "bg-primary/70" : "bg-black/30"
        } shadow-lg border border-white/10 relative`}
      >
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-full border border-[#915EFF]/50 blur-[1px] opacity-70"></div>
        <div className="absolute inset-0 rounded-full border border-[#915EFF]/20 blur-[3px]"></div>
        
        <div className="flex w-full items-center justify-between px-2 relative z-10">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
            <p className="flex cursor-pointer text-[18px] font-bold text-white ">
              {config.html.title}
            </p>
          </Link>

          <ul className="hidden list-none flex-row gap-10 sm:flex">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.id ? "text-white" : "text-secondary"
                } cursor-pointer text-[18px] font-medium transition-colors duration-200 hover:text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className="flex flex-1 items-center justify-end sm:hidden">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="h-[28px] w-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } absolute right-4 top-20 z-10 rounded-xl backdrop-blur-lg bg-black/60 border border-white/10 p-6 shadow-xl`}
            >
              <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`cursor-pointer text-[16px] font-medium ${
                      active === nav.id ? "text-white" : "text-secondary"
                    } transition-colors duration-200 hover:text-white`}
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
