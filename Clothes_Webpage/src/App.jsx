import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SearchBar from "./SearchBar";
import Card from "./Card";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import Products from "./Products";


const App = () => {
  const [data, setData] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("");


  // API call
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  //  Debounce 
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchVal);
      // console.log("----------- --",setDebouncedSearch);
    }, 200);

    return () => clearTimeout(timer);
  }, [searchVal]);

  // Filtering krrhe by using usememo mtlb memoized krre
  const filteredData = useMemo(() => {
    if (!debouncedSearch) return data;

    return data.filter(item => {
      const matchedsearch = debouncedSearch ? item.title.toLowerCase().includes(debouncedSearch.toLowerCase()) : true

      const matchedCategory = category === "" ? true : item.category === category

      return matchedsearch && matchedCategory;

    }

    );
  }, [debouncedSearch, data, category]);



  return (
    <>
      <BrowserRouter>
        {/* <SearchBar searchVal={searchVal} setSearchVal={setSearchVal} /> */}

        <Navbar />
        <Routes>


          <Route path="/home" element={<Homepage data={filteredData} />}></Route>
          <Route path="/products" element={
            <Products
            data={filteredData}
            searchVal={searchVal}
            setSearchVal={setSearchVal}
            category={category}
            setCategory={setCategory}

          />}></Route>




        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
