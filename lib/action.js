"use server";

import { redirect } from "next/navigation";
import saveMeal from "./meal.js"; // Using default import
import { revalidatePath } from "next/cache.js";

// Helper function to validate text input
function isInvalidText(text) {
  return !text || text.trim() === "";
}

// Main function to handle meal sharing
export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  // Validate the form data
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return { message: "Please fill in all required fields." };
  }

  // Save the meal and redirect to the meals page
  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
