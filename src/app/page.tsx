import Products from "@/components/Products";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      Home Page
      <Products />
      <Products />
    </main>
  );
}
