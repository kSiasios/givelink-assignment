"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "./Product";

const ProductsGrid = () => {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    axios.get("https://be2.givelink.app/data").then((res) => {
      setProducts(
        Object.values(res.data.products).filter(
          (product: any) => product.active
        )
      );
    });
  }, []);

  return (
    <div className={`grid gap-4 grid-cols-5`}>
      {products &&
        products.map((product: any, index: number) => (
          <Product
            key={index}
            imageURL={product.imagePath}
            name={product.name}
            price={product.price}
          />
        ))}
    </div>
  );
};

export default ProductsGrid;
