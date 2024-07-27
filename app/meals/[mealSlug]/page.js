import Image from "next/image";
import classes from "./page.module.css";
import { notFound } from "next/navigation";
import { getMealById } from "@/lib/meal";

export function generateMetaData({ params }) {
  const meal = getMealById(params.mealSlug);

  return {
    title: `${meal.title} - NextLevel Food`,
    description: meal.summary,
  };
}

export default function MealsDetailsPage({ params }) {
  const meal = getMealById(params.mealSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br>");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            BY <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
