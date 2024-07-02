import Link from "next/link";

export default function Meals() {
  return (
    <main>
      <h1>Here are the meals!</h1>
      <p>
        <Link href="/meals/meal-share-1">Meal Share 1</Link>
        <Link href="/">Home</Link>
      </p>
    </main>
  );
}
