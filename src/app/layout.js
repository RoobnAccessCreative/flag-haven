import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Montserrat, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import Header from "£/Header";

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
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorBackground: "#0a4c8f",
          colorPrimary: "#da255e",
          colorTextOnPrimaryBackground: "#f9f9fb",
          colorInputBackground: "#0d66bf",
        },
      }}
    >
      <html lang="en">
        <body
          className={`${montserrat.variable} ${montserrat_alternates.variable} antialiased bg-bg-50 text-txt-950`}
        >
          <Header />
          <div className="mt-6"></div>
          <main className="flex flex-col items-center justify-between w-full h-full">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
