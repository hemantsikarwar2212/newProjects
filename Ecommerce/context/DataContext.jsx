import axios from "axios";
import {  createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();
  const fetchAllProducts =async ()=>{
        try {
        const res = await axios.get(
          `https://fakestoreapi.in/api/products?limit=100`
        );
        console.log(res);
        const data1 = res.data.products   
        setData(data1);
      } catch (error) {
        console.log("error while fetching" + error);
      }
      }
  

  return (
    <DataContext.Provider value={{ data, setData,fetchAllProducts }}>
      {children}
    </DataContext.Provider>
  );
};


export const useProducts = ()=>useContext(DataContext)