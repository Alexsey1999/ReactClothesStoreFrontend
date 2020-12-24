// @ts-nocheck
// Libs
import React from 'react'
import axios from '../../axios'
import { notify } from '../../utils/notify'

// Components
import Button from '../Button'

// Styles
import './Question.scss'

const Question: React.FC = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')

  const askQuestion = async (e) => {
    e.preventDefault()

    try {
      const response = await axios({
        method: 'POST',
        data: {
          name,
          email,
          message,
        },
        url: '/question',
      })

      if (!response.data.errorMessage) {
        setName('')
        setEmail('')
        setMessage('')
      }

      notify(response.data.successMessage || response.data.errorMessage)
    } catch (error) {
      error.response.data.errors.forEach((error) => {
        notify(error.msg)
      })
    }
  }

  return (
    <div className="question">
      <div className="question-container">
        <h2 className="default-title question-title">
          Задай вопрос, если тебя что-нибудь интересует
        </h2>
        <form className="question-form" action="" onSubmit={askQuestion}>
          <div className="question-field">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Имя"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="question-field">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="E-mail"
              type="email"
              name="email"
              required
            />
          </div>
          <div className="question-field">
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              placeholder="Сообщение"
              className="question-message"
              required
              name="message"
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
