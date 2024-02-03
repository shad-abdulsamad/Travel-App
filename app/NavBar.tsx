import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS as links } from "./constants";
import Button from "./components/Button";

const NavBar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="Logo" width="74" height="29" />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="flexCenter regular-16 text-gray-50 curson-pointer pb-1.5 transition-all  hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          variant="btn_dark_green"
          icon="/user.svg"
          title="Login"
        />

        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
      </div>
    </nav>
  );
};

export default NavBar;
