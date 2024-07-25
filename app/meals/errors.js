"use client";

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>An Error Occurred!</h1>
      <p>Failed To Fetch Meal Data. Please Try Again Later.</p>
    </main>
  );
}
