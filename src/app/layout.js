import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Montserrat, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: "variable",
});

const montserrat_alternates = Montserrat_Alternates({
  variable: "--font-montserrat-alt",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "300", "200"],
});

export const metadata = {
  title: "FlagHaven",
  description: "Share your love of flags with other flag enjoyers.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${montserrat.variable} ${montserrat_alternates.variable} antialiased bg-bg-50 text-txt-950`}
        >
          <header className="font-ma text-txt-950 font-medium flex items-center justify-between sticky top-2 ml-2 mr-2">
            <nav
              className={`flex items-center gap-4 bg-pri-700 rounded-full pt-2 pr-4 pb-2 pl-4 w-fit`}
            >
              <Image
                src={"/logo.svg"}
                alt="FlagHaven"
                width={100}
                height={50}
              />
              <form action="">
                <input
                  type="text"
                  className="w-72 bg-pri-600 rounded-full font-m p-1 pl-2"
                  placeholder="Search"
                />
              </form>
              {/* add search and hide */}
            </nav>

            <div
              className={`flex items-center gap-4 bg-pri-700 rounded-full pt-2 pr-4 pb-2 pl-4 w-fit`}
            >
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <SignInButton>
                  <h1>Log in</h1>
                </SignInButton>
                <SignUpButton />
              </SignedOut>
            </div>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
