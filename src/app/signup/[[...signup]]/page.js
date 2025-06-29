import { SignUp } from "@clerk/nextjs";
import cardStyles from "%/styles/card.module.css";
import Header from "%/Header";

export default function SignUpPage() {
  return (
    <>
      <Header />
      <main className="h-full flex flex-col justify-center items-center">
        <div className={`${cardStyles.shadow} rounded-2xl mt-[-20%]`}>
          <SignUp />
        </div>
      </main>
    </>
  );
}
