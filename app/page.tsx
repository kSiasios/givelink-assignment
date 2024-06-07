import Link from "next/link";
import ProductsGrid from "./components/ProductsGrid";

export default function Home() {
  return (
    <main className="flex min-h-screen gap-3 flex-col items-center justify-between p-24">
      <h1 className="font-light italic">
        Designed & Developed by{" "}
        <Link
          className="font-normal not-italic underline"
          href="https://www.linkedin.com/in/konstantinos-siasios/"
        >
          Konstantinos Siasios
        </Link>
      </h1>
      <ProductsGrid />
    </main>
  );
}
