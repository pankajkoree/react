import { createRoot } from "react-dom/client";
import "./style.css";
import { Children } from "react";
import React from "react";

function Card(props) {
  const { title, image, brand, price } = props;
  return (
    <div className="card">
      <img src={image} alt="iphone image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </div>
  );
}

function Card2() {
  return <h1>HEllO</h1>;
}

const container = [Card(1), Card(2), Card(3), Card(4), Card(5)];

const root = createRoot(document.getElementById("root"));

console.log("Hello world!!!");

// fetch('https://dummyjson.com/products')
//     .then((res) => res.json())
//     .then((data) => {
//         root.render(
//             <div className="container">
//                 {
//                     data.products.map((product) =>{
//                         return Card({
//                             key:product.id,
//                             title:product.title,
//                             image:product.thumbnail,
//                             brand:product.brand,
//                             price:product.price}
//                         )
//                     })
//                 }
//             </div>
//         )
//     })

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.products.map((product) => {
        return (
          <Card
            key={product.id}
            title={product.title}
            brand={product.brand}
            price={product.price}
            image={product.thumbnail}
          />
        );
      }))
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return (
            <Card
              key={product.id}
              title={product.title}
              brand={product.brand}
              price={product.price}
              image={product.thumbnail}
            />
          );
        })}
      </div>
    );
  });

// const h1 = <h1>hello</h1>
// console.log(h1)

// root.render({
//     $$typeof: Symbol.for('react.element'),
//     type: Card,
//     ref: null,
//     props: {
//         title: 'iPhone 13',
//         image: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
//         brand: 'Apple',
//         price: 899,
//         key: 1
//     }
// })

// console.log(React.createElement(Card, {
//     title: 'iPhone 13',
//     image: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
//     brand: 'Apple',
//     price: 899,
//     key: 1
// }))
// root.render(
//     React.createElement(Card, {
//         title: 'iPhone 13',
//         image: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
//         brand: 'Apple',
//         price: 899,
//         key: 1
//     }))

// root.render(
//     <Card
//         title="iPhone 12"
//         image="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
//         brand="Apple"
//         price="899"
//     />
// );
