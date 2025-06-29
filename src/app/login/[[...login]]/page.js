import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <main className="h-full flex flex-col justify-center items-center">
      <SignIn />
    </main>
  );
}
