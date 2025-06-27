import { db } from "@/utils/db";

export default async function HomePage() {
  const data = await db.query(
    "SELECT fh_users.*, fh_users.username \
    FROM fh_posts, fh_users \
    JOIN fh_posts ON fh_posts.poster = fh_users.clerk_id \
    ORDER BY fh_posts.date DESC"
  ).rows;
  return (
    <main>
      <h1>bwaa</h1>
    </main>
  );
}
