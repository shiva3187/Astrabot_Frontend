import { useEffect } from "react"

const App = () => {
  useEffect(()=>{
    const response=fetch(`/api/`);
    console.log(response);


  },[]);

  return (
   <>
   </>
  )
}

export default App