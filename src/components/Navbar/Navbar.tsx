/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lJwnQlHSEBA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { ModeToggle } from "../Toggle/ModeToggle";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import logo from "../../../public/images/logo.webp";
import Image from "next/image";
export default function Navbar() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-primary">
      <div className="border-b-2 flex justify-between items-center w-full">
        <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
          <Image width={250} height={100} src={logo} alt="logo" />
        </Link>
        <nav className="ml-auto hidden lg:flex gap-6 ">
          <div>
            <ModeToggle />
          </div>
          <div>
            <Button>
              {" "}
              Get Started <ArrowRight />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
