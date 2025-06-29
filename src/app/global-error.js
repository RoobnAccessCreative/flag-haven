"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "$/accordion";
import { Button } from "$/button";
import Link from "next/link";
import cardStyles from "%/styles/card.module.css";
import flagStyles from "./flag.module.css";

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

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body
        className={` ${montserrat.variable} ${montserrat_alternates.variable} antialiased bg-bg-100 text-txt-950 flex flex-col items-center justify-evenly w-full h-dvh gap-4`}
      >
        <div className="flex items-center gap-8">
          <Image
            src={"/error.svg"}
            alt="red flag"
            width={100}
            height={100}
            className={`transform-[scaleX(-1)] ${flagStyles.left}`}
          />
          <h1 className="text-4xl font-bold font-ma">
            Error — Something Went Wrong
          </h1>
          <Image
            src={"/error.svg"}
            alt="red flag"
            width={100}
            height={100}
            className={`${flagStyles.right}`}
          />
        </div>

        <Accordion
          type="single"
          collapsible
          className={`w-lg min-h-fit h-1/12 border-acc-500 p-6 pt-4 pb-4 border-2 rounded-md ${flagStyles.shadow} `}
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className={"text-lg hover:no-underline"}>
              View Error
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance bg-acc-300/75 p-2 rounded-sm">
              {error.name} — {error.message}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="flex items-center gap-12">
          <Button
            asChild
            className={`w-3xs bg-acc-500 hover:bg-acc-600 ${cardStyles["button-shadow"]}`}
          >
            <button onClick={() => reset()}>Try Again</button>
          </Button>
          <div>
            <p className="text-center text-md text-bg-600">
              |<br />
              or
              <br />|
            </p>
          </div>
          <Button asChild className={`w-3xs bg-bg-200 hover:bg-bg-300`}>
            <Link href={"/"}>Back to Safety</Link>
          </Button>
        </div>
      </body>
    </html>
  );
}
