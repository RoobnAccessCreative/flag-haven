"use client";

import Username from "%/Username";
import { useUser } from "@clerk/nextjs";

export default function SetupAccountPage() {
  const { isLoaded, user } = useUser();

  return (
    <main className="w-full h-full flex items-center justify-center">
      <Username email={user?.emailAddresses[0]} user={user.id} />
    </main>
  );
}
