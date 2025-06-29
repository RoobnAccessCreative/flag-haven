"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function ProfilePic() {
  const { user } = useUser();

  return (
    <>
      <img
        src={user?.imageUrl}
        height={200}
        width={200}
        alt="profile picture"
        className="rounded-full"
      />
    </>
  );
}
