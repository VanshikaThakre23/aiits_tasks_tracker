import React, { lazy, Suspense, useState } from 'react'

import User from './User';
import User2 from './User2';
import StyleProps from './StyleProps';

// const User = lazy(()=>import('./User')); 

const App = () => {
  // const [load, setLoad] = useState();

  //const [display, setDisplay] = useState(false);
  
  
      let propObject={
        name:"vanshika",
        age:"22",
      }

  return (
    <>
    <div>
       {/* <h1>Lazy Loading Tutorial</h1> */}
      {/* {
        load ?<Suspense> <User /> </Suspense>: null
      } */}
      {/* <button onClick={() => setLoad(!load)}>Click me</button> */}


      {/* <h1>Multiple condition rendering</h1>
      <button onClick={() => setDisplay("nobita")}>Click me</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={() => setDisplay("doraemon")}>Click me</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={() => setDisplay("")}>Clear</button>
      {
        display === "nobita" ? <User /> :
          display === "doraemon" ? <User2 /> :
            null
      } */}
    </div>
     

      {/* <User user={propObject} /> */}
      {/* <User name="mariya" />
      <User />
      <User/> */}

      <StyleProps/>


    </>
  )
}

export default App