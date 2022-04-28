// import logo from './logo.svg';
// import {useState} from "react";
import './App.css';
import {Todo} from "./components/Todo"

// function App() {
//   const data = "hello c1"
//   const getData = (data2)=>{
//     console.log("got data from child:", data2)
//   }
//   const [message, setMessage] = useState("")
//   return (
//     <div className="App">
//       <First d={data}/>
//       <Second dataFn={getData}/>
//     </div>
//   );
// }

// const First = ({d})=>{
//   console.log("received from parent", d)
//   return <div>First Child</div>
// }
// const Second = ({dataFn})=>{
//   const data2 = "hello c2";
//   dataFn(data2);
//   return <div>Second Child</div>
// }
// const Third = ()=>{

// }
function App(){
  return (
    <div className="App">
      <Todo/>
    </div>
  )
}
export default App;
