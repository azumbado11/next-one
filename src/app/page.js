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
New Arrivals / ShopbySport / Popular son un contenedor que acepta <Items> pensar como componetizarlo
Carrousel = ({title, itemData}) => {}

*/

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

  not-found.jsx en el fichero /app para crear la página de error 404 
  Server Fetching https://www.youtube.com/watch?v=jMy4pVZMyLM 1:14:00

  Para el carrito, habría que hacer 
  post   * añadir item
  patch  * modificar item (cantidad) 
  delete * eliminar del carrito
  get    * traer el carrito del usuario, aunque para ello habría que hacer un registro previo

1.0
-. Arreglar las imagenes
-. UI de los filtros                           (✓)
-. Carousel funcional
-. Custom Hook de filtros                      (X)
-. Custom hook de itemContext y cartContext    (X)
-. Página de la bolsa de compra                (✓)
-. API con endpoints                           (✓)
-. Enrutado dinámico                           (✓)
-. Responsive 

2.0
-.Agregar para link roto intencional                                                 (✓)
-.Añadir req querys con su respectivo filtro de la API para New arrivals y Sale      (✓)
-.Añadir UI que muestre New Arrivals y Sale en /store                                (✓)
-.Carousel funcional                                                                 (✓)
-.Hacer las descripciones de los items y el apartado de información del home         (✓)
-.Añadir uno o dos productos para cada deporte                                       (✓)
-.Arreglar y añadir imagenes                                                         (✓)
-.Mejorar descripciones del proyecto                                                 (✓)
-.Añadir funcionalidad para borrar todo el contenido del carrito                     (✓)
-.Añadir lo de cantidad, si hay dos items duplicados, que cuenten como uno           (✓)
-.Responsive                                                                         (✓)
-.Cambiar la UI de los filtros en /store a horizontal                                (✓)


Tablet
@media (max-width: 895px){}

Mobile
@media (max-width: 700px){}

*/
