import Image from "next/image";
import styles from "./page.module.css";
import { Hero, Carousel, Info, Join } from "../components/index";
import { sports } from "../constants/index";

async function getNewArrivals() {
  const res = await fetch(
    "http://localhost:4000/api/v1/items?new_arrival=true"
  );
  return res.json();
}

export default async function Home() {
  const arrivals = await getNewArrivals();
  return (
    <main>
      <Hero />
      <section className="section__padding carousels-section__container">
        <Carousel title={"New Arrivals"} items={arrivals.data} />
        <Carousel title={"Shop by Sport"} items={sports} />
      </section>
      <Info />
      <Join />
    </main>
  );
}

/* 
Routes: 
  "/"                     Home
  "/store"                Store              Fetch(Items)
  /store&arrival=true     Show Arrivals      
  /store&genre=men        Filter by men      
  /store&genre=women      Filter by women
  /store&sale=true        Show sales
  /store&sport=""         Filter by Sport
  /store&category=""      Filter by Category
  "/store[1]"             Show Full Item     Fetch(Item:ID)
*/
