import React, { useState } from "react";
import PropTypes from "prop-types";
export const AddCategory = ({ setCategories }) => {
   // Puedo traer el useState sin necesidad de importarlo
   const [inputValue, setInputValue] = useState("");
   const handleInputChange = (e) => {
      setInputValue(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (inputValue.trim().length > 2) {
         setCategories((cats) => [inputValue, ...cats]);
         setInputValue("");
      }
   };
   return (
      <form onSubmit={handleSubmit}>
         <input type="text" value={inputValue} onChange={handleInputChange} />{" "}
      </form>
   );
};

AddCategory.propTypes = {
   setCategories: PropTypes.func.isRequired, //func evalua funciones
};

// AddCategory.propTypes = {
//    value: PropTypes.string.isRequired,
// };
// AddCategory.defaultProps = {
//    value: "",
// };
