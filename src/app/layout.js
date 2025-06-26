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
          className={`${montserrat.variable} ${montserrat_alternates.variable} antialiased bg-bg-50 text-txt-900`}
        >
          <header className="font-ma">
            <nav></nav>
            <div>
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
