import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import { useState, useEffect, useMemo } from 'react'
import axios from 'axios';

const App = () => {

  const [data, setData] = useState([]);

  const [searchVal, setSearchVal] = useState("");

  const [reset, setReset] = useState([]);

  const [debounceVal, setDebounceVal] = useState("");


  // Api Call---------------------------------------------------------
  const getData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products")
      console.log("------------", response.data);
      setData(response.data);
      setReset(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {

    getData()
  }, []);


  // debouncing ------------------------------------------------------

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceVal(setSearchVal)
    }, 200);


    return () => {
      clearTimeout(handler);
    }

  }, [searchVal]);



  // memoization--------------------------------------------------------

  const filteredData = useMemo(() => {
    if (!debounceVal) return data;

    return products.filter(item =>
      item.title.toLowerCase().includes(debounceVal.toLowerCase())
    );
  }, [debounceVal, data]);


  const filterBySearch = reset.filter((item) => {
    if (item?.title.toLowerCase()
      .includes(searchVal.toLowerCase())) { return item; }
  })
  setData(filterBySearch);


  const handleSearchClick = () => {
    if (searchVal === "") {
      setData(reset);
      return
    };


  }


  return (
    <>
      <Navbar handleSearchClick={handleSearchClick} setSearchVal={setSearchVal}  searchVal={searchVal} />
      <Card data={filteredData} />
    </>

  )
}

export default App