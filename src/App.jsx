import React from 'react'
import Instastory from './component/Instastory'
import img from './assets/img.jpg'
import './App.css'

const App = () => {
 const stories = [
  {
    id: 1,
    name: "Mayuri",
    image: img,
  },{
    id: 2,
    name: "Romya",
    image: img,
  },
  {
    id: 3,
    name: "Sneha",
    image: img,
  },
  {
    id: 4,
    name: "Siya",
    image: img,
  },
  {
    id: 5,
    name: "Riya",
    image: img,
  },
  {
    id: 6,
    name: "Bhoomi",
    image: img,
  },{
    id: 7,
    name: "Manu",
    image: img,
  },
  {
    id: 8,
    name: "Jiya",
    image: img,
  },
  {
    id: 9,
    name: "Diya",
    image: img,
  },
  {
    id: 10,
    name: "Neha",
    image: img,
  }
    
];
  return (
    <div className="story-container">
      {stories.map((story) => (
        <Instastory  image={story.image} id={story.id} name={story.name} />
      ))}
    </div>
  )
}

export default App

  