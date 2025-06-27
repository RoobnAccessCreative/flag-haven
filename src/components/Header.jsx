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
    <header className="font-ma text-txt-950 font-medium flex items-center justify-between sticky top-4 w-[calc(100dvw-2rem)]">
      {/* 
      left side
      —> logo, search, theme, new  post
        —> search is a form with input and button
        —> theme is a button to toggle between light and dark mode
        —> new post is a button to create a new post
      */}
      <nav
        className={`flex items-center gap-4 bg-pri-700 rounded-lg pt-2 pr-4 pb-2 pl-4 w-fit shadow-2xl h-14`}
      >
        <Link href={"/"}>
          <Image src={"/logo.svg"} alt="FlagHaven" width={100} height={50} />
        </Link>
        <form action="">
          <input
            type="text"
            className="w-72 bg-pri-600 rounded-md font-m p-1 pl-2 text-txt-950 focus:outline-none focus:ring-2 focus:ring-pri-500"
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
        className={`flex items-center gap-4 bg-pri-700 rounded-lg pt-2 pr-4 pb-2 pl-4 w-fit shadow-2xl h-14`}
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
