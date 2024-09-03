"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Posts",
    href: "/post",
  }

];

const Header = () => {
  const pathName = usePathname();
  return (
    <>
      <div className="navbar">
        <ul className="flex gap-5 py-10">
          {navItems.map((item, index) => (
            <li key={index} >
              <Link
                className={`${pathName === item.href && "active"}`}
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
