import { Card } from "@/components/Card";
import cardImage from '../../public/card-img.jpg';

export default function Home() {
  return (
    <main className="grid gap-12">
      <h1 className="text-lg">Next.Js Performance Playground</h1>

      <section className="min-h-screen grid md:grid-cols-3 gap-4">
        <Card image={cardImage} title="Use next/image" description="Description 1" path='/next-image' />
      </section>
    </main>
  );
}
