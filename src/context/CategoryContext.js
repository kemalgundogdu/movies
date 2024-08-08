import { createContext, useContext, useState, useEffect } from "react";
import { CategoryList } from "../api";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
    const [categorys, setCategorys] = useState([]);
  
    useEffect(() => {
      CategoryList().then((data) => setCategorys(data.genres));
    }, []);
  
    const values = { categorys };
  
    return <CategoryContext.Provider value={values}>{children}</CategoryContext.Provider>;
  };
  
  export const useCategory = () => useContext(CategoryContext);