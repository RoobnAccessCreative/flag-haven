import Image from "next/image";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
  return (
    <header className="font-ma text-txt-950 font-medium flex items-center justify-between sticky top-4 ml-2 mr-2">
      {/* 
      left side
      —> logo, search, theme
      */}
      <nav
        className={`flex items-center gap-4 bg-pri-700 rounded-full pt-2 pr-4 pb-2 pl-4 w-fit shadow-2xl h-12`}
      >
        <Link href={"/"}>
          <Image src={"/logo.svg"} alt="FlagHaven" width={100} height={50} />
        </Link>
        <form action="">
          <input
            type="text"
            className="w-72 bg-pri-600 rounded-full font-m p-1 pl-4"
            placeholder="Search"
          />
        </form>
        {/* add search and hide */}
      </nav>

      {/* 
      right side
      —> user auth, profile
      */}
      <div
        className={`flex items-center gap-4 bg-pri-700 rounded-full pt-2 pr-4 pb-2 pl-4 w-fit shadow-2xl h-12`}
      >
        <SignedIn>
          <div className="cursor-pointer">
            <UserButton />
          </div>
        </SignedIn>

        <SignedOut>
          <SignInButton oauthFlow="popup" mode="modal">
            <h1 className="cursor-pointer">Log in</h1>
          </SignInButton>

          <SignUpButton oauthFlow="popup">
            <h1 className="cursor-pointer">Sign up</h1>
          </SignUpButton>
        </SignedOut>
      </div>
    </header>
  );
}
