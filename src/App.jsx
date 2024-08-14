import { useEffect } from "react"

const App = () => {
  useEffect(()=>{
    const response=fetch(`/api/`);
    console.log(response);


  },[]);

  return (
    <div>Hello World</div>
  )
}

export default App