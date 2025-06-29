import { Button } from "$/button";
import { Card, CardDescription } from "$/card";
import Header from "%/Header";
import Image from "next/image";
import Link from "next/link";
import cardStyles from "%/styles/card.module.css";

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <main className="w-full h-full flex flex-col items-center justify-center">
        <Card
          className={`flex flex-col items-center w-full max-w-lg pl-4 pr-4 bg-pri-700 text-[#ebe9fc] font-m border-pri-800 outline-0 z-20 ${cardStyles.shadow}`}
        >
          <Image
            src="/lost.png"
            width={150}
            height={150}
            alt="flag with a question mark"
            className="invert"
          />
          <h1 className="text-3xl font-bold font-ma">Oops!</h1>
          <CardDescription className={"text-[#a3a3c2]"}>
            We couldn&apos;t quite find what you&apos;re looking for. Make sure
            you typed in everything correctly.
          </CardDescription>
        </Card>
        <Button
          className={`mt-32 bg-acc-500 hover:bg-acc-400 w-full max-w-lg text-txt-950 ${cardStyles["button-shadow"]}`}
          asChild
        >
          <Link href={"/"}>Back to Safety</Link>
        </Button>
      </main>
    </>
  );
}
