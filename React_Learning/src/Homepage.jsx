import React from 'react'

const Homepage = () => {

  const token  = localStorage.getItem("token");

  return (
   <>

    {token? <h2>Hello, Welcome</h2>:<h2>Please Login</h2>}
   </>
  )
}

export default Homepage