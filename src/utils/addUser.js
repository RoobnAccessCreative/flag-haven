"use server";

import { revalidatePath } from "next/cache";
import { db } from "./db";
import { redirect } from "next/navigation";

export const addUser = async (formData) => {
  db.query("INSERT INTO fh_users VALUES ($1, $2, $3, $4)", [
    formData.get("id"),
    formData.get("username"),
    formData.get("email"),
    formData.get("bio"),
  ]);

  revalidatePath("/");
  redirect("/");
};
