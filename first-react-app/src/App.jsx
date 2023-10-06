
import './App.css';
import './index.css';
import Chicken from "./Chicken";

import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";
import ColorList from "./ColorList";
import ShoppingList from "./ShoppingList";
import Clicker from "./Clicker";
import Form from './Form';
import Counter from './Counter';
import Toggler from './Toggler';
import "./Toggler.css";
import ToggleCounter from './ToggleCounter';
import ColorBox from './ColorBox';
import "./ColorBox.css"
import ColorBoxGrid from "./ColorBoxGrid"

const data = [
  { id: 1, item: 'eggs', quantity: "12", completed: true },
  { id: 2, item: 'milk', quantity: 3, completed: false },
  { id: 3, item: 'bread', quantity: 2, completed: false },
  { id: 4, item: 'lettuce', quantity: 4, completed: true },
  { id: 5, item: 'soup', quantity: 8, completed: false },
  { id: 6, item: 'hotdogs', quantity: 6, completed: false},
]

const colors = [
  "#E53935",
  "#FF000F",
  "F0F0F0",
  "#03A9F4",
  "#FF5722",
  "#FF9800",
  "#4CAF50",
  "#366667",
  "#7d8e90",
  "#dcd1e9",
]


function App() {
  return (
  <div >
    <Counter/>
    
    <ColorBox colors={colors}/>
    
    <ColorBoxGrid colors={colors} />


    <ToggleCounter />
    {/* <Clicker message="Please Stop Clicking ME!" buttonText="do not click" />
    <Form/> */}
    {/* <Counter/> */}
    {/* <ShoppingList items={ data } /> */}
    {/* <ShoppingList items={ data } /> */}
    {/* <ShoppingList items={ data } />
    <ShoppingList items={ data } />
    <ShoppingList items={ data } /> */}
    {/* <Heading color="magenta" text="welcome!" fontSize="20px" />
    <Heading color="teal" text="What's up? blah blah blah" fontSize="48px"/>
    <DoubleDice/>
    <DoubleDice/>
    <DoubleDice/>

    <ColorList colors={["red", "pink", "purple", "teal"]} />
    <ColorList colors={["orangered", "olive", "slateGray", "blue"]} />

    {/* <ListPicker values={[1, 2, 3]}/>
    <ListPicker values={["a", "b", "c"]}/> */}
    {/* <Greeter person="David" />
    <Greeter person="Rosa" from="Oliver"/>
    <Greeter person="Stephen" from="Elsa"/>
    <Die numSides={20}/>
    <Die numSides={10}/>
    <Die numSides={6}/> */}
  </div>
  )
}
  
export default App;



