import React from "react"
import { Article } from "./components/Article/Article"
import { Navbar } from "./components/Navbar/Navbar"
import { Counter } from "./components/Counter/Counter"

import "./styles/App.css"

import article1Img from "./assets/images/article1.jpg"
import article2Img from "./assets/images/article2.jpg"
import article3Img from "./assets/images/article3.jpg"

// Componente em classe é uma classe que herda a classe Component do React,
// e retorna HTML dentro do método render.

class App extends React.Component {
  // Método responsável por renderizar o conteúdo HTML do nosso componente
  render() {
    return (
      <>
        <Navbar />
        
        <Counter />

        
        {/* <section id="articles">
          <Article title="Designing Dashboards"
           provider="NASA" 
           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta harum sequi, voluptatibus at dolorem ea esse nihil libero odit saepe delectus voluptas tenetur consectetur rem incidunt cum reprehenderit architecto. Quasi."
           thumbnail={article1Img}/>

          <Article title="Vibrant Portraits of 2020"
           provider="SpaceNews"
           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta harum sequi, voluptatibus at dolorem ea esse nihil libero odit saepe delectus voluptas tenetur consectetur rem incidunt cum reprehenderit architecto. Quasi."
           thumbnail={article2Img}/>

          <Article title="36 Days of Malayalam Type" 
           provider="SpaceFight Now" 
           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta harum sequi, voluptatibus at dolorem ea esse nihil libero odit saepe delectus voluptas tenetur consectetur rem incidunt cum reprehenderit architecto. Quasi."
           thumbnail={article3Img}/>

          <Article title="Designing Dashboards" 
           provider="NASA" 
           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta harum sequi, voluptatibus at dolorem ea esse nihil libero odit saepe delectus voluptas tenetur consectetur rem incidunt cum reprehenderit architecto. Quasi."
           thumbnail={article1Img}/>
        </section> */}
      </>
    )
  }
}

export default App;