import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import { modoNoche } from "./modonocturno";

// GifExpertApp.defaulProps = {
//    titulo: "GifExpertApp",
export const GifExpertApp = ({ titulo }) => {
   const [categories, setCategories] = useState([""]);

   //  const handleAdd = () => {
   //     // setCategories([...categories, "The King Of Rivia"]); // Agregar una posicion mas a un array
   //     // setCategories((cat) => [...categories, "Jaimico"]); Esta solucion me sirve para llamarla desde otro componente
   //  };
   return (
      <div>
         <i onClick={modoNoche} className="far fa-moon"></i>
         <h2> {titulo} </h2> <AddCategory setCategories={setCategories} />{" "}
         <hr />{" "}
         {/* <button onClick={handleAdd}>Agregar</button>
                                       {/* <button onClick={() => setCategories([...categories, "Sangano"])}>
                                          Agregar
                                       </button> */}{" "}
         <ol>
            {" "}
            {
               categories.map((category) => (
                  <GifGrid key={category} category={category} />
               )) //
            }{" "}
         </ol>{" "}
      </div>
   );
};
// };
GifExpertApp.defaultProps = {
   titulo: "GifExpertApp",
};
