import React, { useState } from 'react';

import './App.css';
import List from "./components/List" ;
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name:string
    age:number
    url:string
    note?:string
  }[]
}

function App() {

  const [people, setPeople]=useState<IState["people"]>([
    {
      name:"Virat Kohli",
      url:"https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2021/08/18/961806-kohli-970.jpg",
      age:32,
      note:"He is the world best batsman in this current generation"
    },
    {
      name:"MS Dhoni",
      url:"https://i.pinimg.com/474x/e0/c6/57/e0c65706c7aea5e34421c0736a8a6f25.jpg",
      age:39,
      note:"Captain Cool"
    }
  ])


  return (
    <div className="App">
      <h1>Players in Good Form</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
