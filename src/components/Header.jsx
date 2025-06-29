import Image from "next/image";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import cardStyles from "%/styles/card.module.css";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/db";
import UserIcon from "%/UserIcon";

export default async function Header() {
  const { userId } = await auth();

  let data;
  try {
    const res = await db.query(
      "SELECT username FROM fh_users WHERE clerk_id = $1",
      [userId]
    );
    data = res.rows[0];
  } catch (err) {
    data = "";
    if (err) {
      throw new Error(`${err}`);
    }
  }

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
        className={`flex items-center gap-4 bg-pri-700 rounded-lg pt-2 pr-4 pb-2 pl-4 w-fit shadow-2xl h-14 ${cardStyles.shadow}`}
      >
        <Link href={"/"}>
          <Image src={"/logo.svg"} alt="FlagHaven" width={100} height={50} />
        </Link>
        <form action="">
          <input
            type="text"
            className="w-72 bg-pri-600 rounded-md font-m p-1 pl-2 text-txt-950 focus:outline-none focus:ring-2 focus:ring-pri-500"
            placeholder="Search Coming Soon!"
            disabled
            aria-disabled
          />
        </form>
        {/* add search and hide */}
      </nav>

      {/* 
      right side
      —> user auth, profile
      */}
      <div
        className={`flex items-center justify-baseline  gap-4 bg-pri-700 rounded-lg pt-2 pr-4 pb-2 pl-4 w-fit shadow-2xl h-14 ${cardStyles.shadow}`}
      >
        <SignedIn>
          <div className="cursor-pointer">
            <UserIcon username={data?.username} />
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
