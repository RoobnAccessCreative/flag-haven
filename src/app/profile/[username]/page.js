import { Card, CardContent, CardTitle } from "$/card";
import { db } from "@/utils/db";
import { notFound, redirect } from "next/navigation";
import ProfilePic from "%/ProfilePic";
import Post from "%/Post";
import Header from "%/Header";
import cardStyles from "%/styles/card.module.css";

export default async function ProfilePage({ params }) {
  const param = await params;
  const user = param.username;

  let userData;
  try {
    const res = await db.query("SELECT * FROM fh_users WHERE username = $1", [
      String(user),
    ]);
    userData = res.rows[0];
  } catch (err) {
    console.error(err);
    notFound();
  }
  const pr = await db.query(
    "SELECT fh_posts.*, fh_users.username FROM fh_posts JOIN fh_users ON fh_users.clerk_id = fh_posts.poster ORDER BY fh_posts.date DESC"
  );
  const posts = pr.rows;
  console.log(posts.length);

  return (
    <>
      <Header />
      <main className="h-full flex flex-col justify-evenly items-center w-full">
        <div className="flex items-center gap-4 min-w-xl w-max justify-around">
          <ProfilePic />
          <h1 className="text-4xl font-black font-ma">{userData.username}</h1>
        </div>
        <Card
          className={`w-full max-w-3/4 bg-pri-700 text-[#ebe9fc] font-m border-pri-800 outline-0 ${cardStyles.shadow}`}
        >
          <CardTitle className={"ml-4"}>Bio</CardTitle>
          <CardContent>{userData.bio}</CardContent>
        </Card>
        <Card
          className={`w-full max-w-3/4 bg-pri-700 text-[#ebe9fc] font-m border-pri-800 outline-0 ${cardStyles.shadow}`}
        >
          <CardTitle className={"ml-4"}>Posts</CardTitle>
          <CardContent>
            {posts.length == 0 ? (
              <h1>no posts from this user</h1>
            ) : (
              posts.map((p) => (
                <Post
                  key={p.id}
                  img={p.img}
                  user={p.username}
                  title={p.title}
                  cap={p.caption}
                  date={p.date}
                />
              ))
            )}
          </CardContent>
        </Card>
      </main>
    </>
  );
}
