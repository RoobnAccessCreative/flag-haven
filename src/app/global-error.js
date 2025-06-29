"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "$/accordion";
import Header from "%/Header";
import { Button } from "$/button";
import Link from "next/link";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body
        className={` \
          antialiased bg-bg-100 text-txt-950 flex flex-col items-center justify-between \
          w-full h-full gap-4`}
      >
        <div>
          <Image src={"error.svg"} alt="red flag" width={100} height={100} />
          <h1>Error — Something Went Wrong</h1>
          <Image src={"error.svg"} alt="red flag" width={100} height={100} />
        </div>

        <Accordion type="single" collapsible className={"h-20"}>
          <AccordionItem value="item-1">
            <AccordionTrigger>View Error</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              {error.message}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div>
          <Button variant={"outline"} asChild>
            <button onClick={() => reset()}>Try Again</button>
          </Button>
          <Button asChild>
            <Link href={"/"}>Back to Safety</Link>
          </Button>
        </div>
      </body>
    </html>
  );
}
