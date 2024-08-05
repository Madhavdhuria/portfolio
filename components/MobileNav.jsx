"use client";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Madhav
              <span className="text-accent"> .</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col gap-8 justify-center items-center">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`text-xl capitalize hover:text-accent transition-all ${
                  pathname === link.path &&
                  "text-accent border-b-2 border-accent"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
