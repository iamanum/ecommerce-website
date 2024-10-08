import React from 'react';
import ProductCard from './ProductCard'; 

const productsData = [
  {
    img: "/jacket-1.jpg.png", 
    title: "Jacket",
    desc: "Trekking & Running Jacket",
    rating: 4, 
    price: "25.00",
  },
  {
    img: "/jacket-2.jpg.png",
    title: "Jacket",
    desc: "Denim Jacket", 
    rating: 4.5, 
    price: "30.00",
  },
  {
    img: "/party-wear.jpg",
    title: "Shoe",
    desc: "Party Wear Low Heel",
    rating: 4, 
    price: "30.00",
  },
  {
    img: "/shoe.jpg",
    title: "Sports",
    desc: "Trekking & Running Shoe - Blue",
    rating: 4, 
    price: "55.00",
  },
  {
    img: "/shirt.jpg",
    title: "Shirt",
    desc: "Long Sleeve Shirt",
    rating: 5, 
    price: "15.00",
  },
  {
    img: "/skirt.jpg",
    title: "Skirt",
    desc: "Party Skirt",
    rating: 5, 
    price: "15.00",
  },
  {
    img: "/watch-1.jpg",
    title: "Watches",
    desc: "Smart Watch",
    rating: 5, 
    price: "100.00",
  },
  {
    img: "/watch.jpg",
    title: "Watches",
    desc: "Black Coral Watch",
    rating: 4, 
    price: "150.00",
  },
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
        lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating} 
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;