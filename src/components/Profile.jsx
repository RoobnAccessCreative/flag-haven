import { Card, CardContent, CardTitle } from "$/card";
import { db } from "@/utils/db";
import { notFound, redirect } from "next/navigation";
import ProfilePic from "%/ProfilePic";
import { revalidatePath } from "next/cache";

export default async function ProfilePage({ params }) {
  const param = await params;
  const user = params.user;
  try {
    const userData = await db.query(
      "SELECT * FROM fh_users WHERE username = $1",
      [user]
    ).rows;
    console.log(userData);
  } catch {
    notFound();
  }

  return (
    <>
      <main className="h-full flex flex-col justify-center items-center">
        <div className="flex items-center gap-4">
          <ProfilePic />
          <h1 className="text-2xl font-ma">{userData.username}</h1>
        </div>
        {}
        <Card>
          <CardTitle>Bio</CardTitle>
          <CardContent>{userData.bio}</CardContent>
        </Card>
      </main>
    </>
  );
}
