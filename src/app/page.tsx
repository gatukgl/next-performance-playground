import { Card } from "@/components/Card";
import cardImage from '../../public/card-img.jpg';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        Gatuk
      </div>

      <section>
        <Card image={cardImage} title="Card 1" description="Description 1" />
        <Card image={cardImage} title="Card 1" description="Description 1" />
        <Card image={cardImage} title="Card 1" description="Description 1" />
      </section>
    </main>
  );
}
