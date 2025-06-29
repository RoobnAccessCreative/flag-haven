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
import { Textarea } from "$/textarea";
import cardStyles from "./styles/card.module.css";
import { addUser } from "@/utils/addUser";

export default function Username({ email, user }) {
  return (
    <Card
      className={`w-full max-w-2xl bg-pri-700 text-[#ebe9fc] font-m border-pri-800 outline-0 z-20 ${cardStyles.shadow}`}
    >
      <CardHeader>
        <CardTitle className={"font-ma"}>...Just one more thing</CardTitle>
        <CardDescription className={"text-[#a3a3c2]"}>
          Enter some details about you and your account for others to see!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={addUser} id="newuser">
          <Input
            type="text"
            name="id"
            id="id"
            value={user}
            defaultValue={user}
            readOnly
            hidden
            aria-hidden
          />
          <Input
            type="email"
            name="email"
            id="email"
            hidden
            value={email}
            defaultValue={email}
            readOnly
            aria-hidden
          />
          <label htmlFor="username" className="ml-2 text-sm">
            Username
          </label>
          <Input
            className={`border-0 bg-pri-800/75 mb-4 `}
            type="text"
            placeholder="Enter username"
            required
            aria-required
            name="username"
            id="username"
          />
          <label htmlFor="bio" className="ml-2 text-sm">
            Bio
          </label>
          <Textarea
            name="bio"
            id="bio"
            placeholder={"Estonia flag is on top!"}
            className={"bg-pri-800/75 border-0"}
          />
        </form>
      </CardContent>
      <CardFooter>
        <Button
          type="submit"
          form="newuser"
          className={"w-full bg-acc-500 hover:bg-acc-400"}
        >
          Create Account
        </Button>
      </CardFooter>
    </Card>
  );
}
