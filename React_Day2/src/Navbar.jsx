import React from 'react'


const Navbar = ({handleSearchClick , setSearchVal , searchVal}) => {

    // const [data, setData] = useState([]);

    // const [searchVal, setSearchVal] = useState("");

    // const [reset, setReset] = useState([]);

    // const [debounceVal, setDebounceVal] = useState("");


    // useEffect(() => {
    //     const handler = setTimeout(() => {
    //         setDebounceVal(searchVal)
    //     }, 200);


    //     return () => {
    //         clearTimeout(handler);
    //     }

    // }, [searchVal]);


    // const memoizeData = useMemo(() => {
    //     if (debounceVal === "") {
    //         setData(reset);
    //         console.log("debounce value is ", debounceVal);
    //         return;
    //     }

    //     const handleDebounce = reset.filter((item) => {
    //         if (item?.title.toLowerCase().includes(searchVal.toLowerCase())) {
    //             return item;
    //         }
    //     })
    //     setData(handleDebounce);
    // }, [debounceVal, reset]);

    // useEffect(() => {
    //     setData(memoizeData);
    // }, [memoizeData]);


    // const getData = async () => {
    //     try {
    //         const response = await axios.get("https://fakestoreapi.com/products")
    //         console.log("------------", response.data);
    //         setData(response.data);
    //         setReset(response.data);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    // useEffect(() => {
    //     getData()
    // }, []);

    // const handleSearchClick = () => {
    //     if (searchVal === "") {
    //         setData(reset);
    //         return
    //     };

    //     const filterBySearch = reset.filter((item) => {
    //         if (item?.title.toLowerCase()
    //             .includes(searchVal.toLowerCase())) { return item; }
    //     })
    //     setData(filterBySearch);
    // }

    // const handleInputChange = (e) => {
    //     setSearchVal(e.target.value)
    // }



    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-light bg-light px-5 d-flex'>
                <a className='navbar-brand fw-bold fs-2 ' href="">CLOTHES</a>

                <div className="search-bar ms-auto p-2">
                    <input type="text" className='p-1 rounded' value={searchVal} onChange={(e)=>setSearchVal(e.target.value)} placeholder='search for clothes...' />
                    <button className='p-1 rounded' onClick={handleSearchClick} >Search Here</button>
                </div>

            </nav>



        </>
    )
}

export default Navbar