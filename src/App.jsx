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
  }
];
  return (
    <div>
      {stories.map((story) => (
        <Instastory  image={story.image} id={story.id} name={story.name} />
      ))}
    </div>
  )
}

export default App

  