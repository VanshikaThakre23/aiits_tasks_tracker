import React from 'react'
// import "./Card.css"


const Card = ({data}) => {

    // // search kra sathi state
    // const [searchVal, setSearchVal] = useState("");

    // // // ui vr render krnysathi
    // const [data, setData] = useState([]);

    // // // api cha purn data vr pn store hoin aani ithe pn. bcoz jevha if (searchVal === "")  tr purn data show karaych aahe tr jr vrchi ekch state rahin tr data manipulate hoin mg nntr show kru nai shknar mhnun direct ek ankhi copy maintain krachi 
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

    //    const handleDebounce =  reset.filter((item)=>{
    //         if(item?.title.toLowerCase().includes(searchVal.toLowerCase())){
    //         return item;
    //         }
    //     })
    //     setData(handleDebounce);
    // },[debounceVal , reset]);

    // useEffect(()=>{
    //     setData(memoizeData);
    // },[memoizeData]);


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
        
            <div className="container-fluid  p-5 ">
                <div className="row g-4 p-3">

                    {
                        data.map((user) => (
                            <div className=" col-sm-2 col-md-3 col g-4">
                                <div className=" card h-100 p-2 "

                                    key={user.id}
                                    style={{border:"2px solid black"}}>

                                    <img src={user.image}
                                        className="class-img-top img-rounded mx-auto p-2"
                                        style={{
                                            width: "8rem",
                                            height: "8rem",
                                            borderRadius: "50%",
                                            objectFit: "contain",
                                            border: "1px solid grey",
                                            alignItems: "center",
                                        }} alt="imageee"
                                    />

                                    <div className="card-body text-center">
                                        <h2 className="card-title fs-4 ">{user.title}</h2>
                                        {/* <h3 className="card-text fs-3">{user.desc}</h3> */}
                                        <h4 className="card-text fs-5">{user.category}</h4>
                                        <h5 className="price">Rs {user.price}</h5>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>

            </div>

        </>
    )
}

export default Card