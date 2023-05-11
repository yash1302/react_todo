import React, { useState } from 'react'
import '../CSS/Todo.css'

export default function Todo() {
  const [content, setContent] = useState("")

  const itemEvent = (event) => {
    setContent(event.target.value)
  }

  return (
    <>
      <div className="main_part">
        <div className="center_part">
          <br />
          <h1>TO-DO LIST</h1>
          <input type="text mx-8" onChange={itemEvent} />
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-8">
            Button
          </button>
          <br />


          <ol>
            <li>{content}</li>
            <li>complete Homework</li>
            <li>complete DSA</li>
          </ol>
        </div>
      </div>
    </>
  )
}
