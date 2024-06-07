import Image from "next/image";
import Link from "next/link";

interface ProductData {
  imageURL: string;
  name: string;
  price: number;
}

export const Product = ({ imageURL, name, price }: ProductData) => {
  return (
    <Link href="/under_construction">
      <article
        className="
        aspect-square flex flex-col gap-1 p-3 max-w-[250px] w-full h-full rounded-xl 
        bg-gray-100 border border-givelink-purple/50 cursor-pointer
        dark:bg-gray-800
        shadow-lg dark:shadow-givelink-purple/70
        hover:shadow-givelink-orange/70 
        hover:border-givelink-orange/50 hover:bg-gray-300 hover:shadow-xl
        dark:hover:bg-gray-900
        transition-all
        group
        relative
    "
      >
        <figure className="rounded-lg aspect-square flex justify-center items-center w-full">
          <Image
            src={`https://be2.givelink.app/images/products/${imageURL}`}
            width={100}
            height={100}
            alt={`Cover image for product: ${name}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </figure>
        <div
          className="flex flex-col items-center gap-1 rounded-lg justify-between w-full 
        group-hover:h-full group-hover:bg-givelink-purple/80 group-hover:top-0 group-hover:left-0 group-hover:p-3 group-hover:absolute
        "
        >
          <p
            className="whitespace-nowrap group-hover:whitespace-normal group-hover:flex-1 group-hover:flex group-hover:text-center group-hover:text-white group-hover:font-semibold justify-center items-center text-ellipsis overflow-hidden w-full"
            title={name}
          >
            {name}
          </p>
          <p className="font-bold bg-givelink-purple px-2 py-1 rounded-lg text-white group-hover:bg-givelink-orange">
            {price.toFixed(2)}€
          </p>
        </div>
      </article>
    </Link>
  );
};
