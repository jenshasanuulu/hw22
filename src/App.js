import './App.css';
import"./main.css"
import Header from "./Header"
import Footer from "./Footer"
import Main from"./Main"


function App() {
  const arr=[
    {
      iphoneName:"iphone12",
      preice:"200",
      color:"red",
    },
    {
      iphoneName:"iphone17",
      preice:"400",
      color:"blaclk",
    },
    {
      iphoneName:"iphone13",
      preice:"2300",
      color:"ywellov",
    },
    {
      iphoneName:"iphone15",
      preice:"2500",
      color:"blu",
    },
  ]
  return (
    <div className="App">
      <Header/>
      <Footer/>
      {arr.map((el)=>(
        <Main iphoneName={el.iphoneName} price={el.preice} color={el.color}
      />))}
    </div>
  );
}

export default App;
