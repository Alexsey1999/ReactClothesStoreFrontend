// Libs
import React from 'react'

// Components
import Button from '../Button'

// Styles
import './Question.scss'

const Question: React.FC = () => {
  return (
    <div className="question">
      <div className="question-container">
        <h2 className="default-title question-title">
          Задай вопрос, если тебя что-нибудь интересует
        </h2>
        <form className="question-form" action="">
          <div className="question-field">
            <input placeholder="Имя" type="text" required />
          </div>
          <div className="question-field">
            <input placeholder="E-mail" type="email" required />
          </div>
          <div className="question-field">
            <textarea
              placeholder="Сообщение"
              className="question-message"
              required
              name=""
              id="msg"
            ></textarea>
          </div>

          <div className="btn-wrapper">
            <Button className="ask-question-btn">Задать вопрос</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Question
