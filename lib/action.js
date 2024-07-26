"use server";

import { redirect } from "next/navigation";

import saveMeal from "./meal.js"; // Use default import

export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"), // Corrected typo from 'tile' to 'title'
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  await saveMeal(meal);
  redirect("/meals");
}
