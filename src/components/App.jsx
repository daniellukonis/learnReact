import React from "react"
import Navbar from "./NavBar"
import List from "./List"

export default function App(props) {

  const guitars = ['crap', 'poo', 'toilet']

  return (
    <>
      <Navbar title="Pootars" />
      <div className="container">
        <List
          title="Pooey"
          items={guitars}
        />
      </div>
    </>
  )
}