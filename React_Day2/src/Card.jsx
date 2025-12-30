import { useState, useEffect } from 'react'
import "./Card.css"
import axios from "axios"

const Card = () => {

    // search kra sathi state
    const [searchVal, setSearchVal] = useState("");

    // ui vr render krnysathi
    const [data, setData] = useState([]);

    // api cha purn data vr pn store hoin aani ithe pn. bcoz jevha if (searchVal === "")  tr purn data show karaych aahe tr jr vrchi ekch state rahin tr data manipulate hoin mg nntr show kru nai shknar mhnun direct ek ankhi copy maintain krachi 
    const [reset, setReset] = useState([]);

    const [debounceVal, setDebounceVal] = useState("");


    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceVal(searchVal)
        }, 200);


        return () => {
            clearTimeout(handler);
        }

    }, [searchVal]);


    useEffect(() => {
        if (debounceVal === "") {
            setData(reset);
            console.log("debounce value is ", debounceVal);
            return;
        }

       const handleDebounce =  reset.filter((item)=>{
            if(item?.title.toLowerCase().includes(searchVal.toLowerCase())){
            return item;
            }
        })
        setData(handleDebounce);
    },[debounceVal , reset]);

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
        // fetch("https://fakestoreapi.com/products")
        //     .then(response => response.json())
        //     .then((data) => setUsers(data))
        //     .catch((error) => console.log(error))
        getData()
    }, []);

    const handleSearchClick = () => {
        if (searchVal === "") {
            setData(reset);
            return
        };

        const filterBySearch = reset.filter((item) => {
            if (item?.title.toLowerCase()
                .includes(searchVal.toLowerCase())) { return item; }
        })
        setData(filterBySearch);
    }

    const handleInputChange = (e) => {
        setSearchVal(e.target.value)
    }


    return (
        <>
            <div className="searchBox">
                <input value={searchVal} onChange={handleInputChange} placeholder=''></input>
                <button onClick={handleSearchClick}> Search</button>
            </div>

            <div className="container">
                {
                    data.map((user) => (
                        <div className="card-body" key={user.id}>
                            <img src={user.image} className="img" alt="imageee" />
                            <h2 className="title">{user.title}</h2>
                            <h3 className="desc">{user.desc}</h3>
                            <h4 className="category">{user.category}</h4>
                            <h5 className="price">Rs {user.price}</h5>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default Card