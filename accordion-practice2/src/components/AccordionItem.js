import { useState, useRef } from 'react'

export const AccordionItem = ({ faq }) => {
    const [clicked, setClicked] = useState(false)
    const contentEl = useRef()

    const { question, answer } = faq

    const handleToggle = () => {
        setClicked((prev) => !prev)
    }

  return (
    <li className={`accordion_item ${clicked ? 'active' : ''}`}>
      <button className='button' onClick={handleToggle}>
        {question}
        <span className='control'>{clicked ? '-' : '+'}</span>
      </button>

      <div
        className='answer_wrapper'
        ref={contentEl}
        style={clicked ? { height: contentEl.current.scrollHeight } : { height: '0px' }}>

        <div className='answer'>{answer}</div>
      </div>
    </li>
  )
}
