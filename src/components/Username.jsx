import { Button } from "$/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "$/card";
import { Input } from "$/input";
import cardStyles from "./styles/card.module.css";
import { submit } from "@/utils/submit";

export default function Username({ email }) {
  return (
    <Card
      className={`w-full max-w-2xl bg-pri-700 text-[#ebe9fc] font-m border-pri-800 outline-0 z-20 ${cardStyles.shadow}`}
    >
      <CardHeader>
        <CardTitle>...Just one more thing</CardTitle>
        <CardDescription className={"text-[#a3a3c2]"}>
          Enter the username you want others to reference you with
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={submit}>
          <input
            type="email"
            name="email"
            id="email"
            hidden
            value={email}
            readOnly
            aria-hidden
          />
          <Input
            className={`border-0 bg-pri-800/75`}
            type="text"
            placeholder="Enter username"
            required
            aria-required
            name="username"
            id="username"
          />
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className={"w-full bg-acc-500 hover:bg-acc-400"}>
          Create Account
        </Button>
      </CardFooter>
    </Card>
  );
}
