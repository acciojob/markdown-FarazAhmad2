import React, { useState } from 'react'
import '../styles/App.css'
import ReactMarkdown from 'react-markdown'

const App = () => {
    const [markdown, setMarkdown] = useState("")

    const handleInput = (e)=> {
        setMarkdown(e.target.value)
    }
  return (
    <div className='app'>
        <textarea className='textarea' onChange={handleInput} value={markdown}></textarea>
        <div className='preview'><ReactMarkdown>{markdown}</ReactMarkdown></div>
    </div>
  )
}

export default App