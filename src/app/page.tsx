import { Card } from "@/components/Card";
import cardImage from '../../public/card-img.jpg';

export default function Home() {
  return (
    <main className="grid gap-12">
      <h1 className="text-lg">Next.Js Performance Playground</h1>

      <section className="min-h-screen grid md:grid-cols-3 gap-4">
        <Card image={cardImage} title="Use next/image" description="Optimizes images for better performance by automatically handling lazy loading, resizing, and serving images in modern formats." path='/next-image/' />
        <Card image={cardImage} title="Code splitting for client component" description="Breaks down JS bundles into smaller chunks, load only the code needed, which will reducing initial load times." path='/code-splitting/' />
        <Card image={cardImage} title="Data fetching with SWR" description="A strategy of stale-while-revalidate. SWR returns cached data (stale), then sends a request to revalidate and update the data from network." path='/swr/' />
      </section>
    </main>
  );
}
