import { useState } from "react"
import Sidebar from "../components/Sidebar"

export default function MockInterview() {

  // QUESTIONS

  const questions = [

    {
      question: "Tell me about yourself?"
    },

    {
      question: "Why should we hire you?"
    },

    {
      question: "Explain your final year project."
    },

    {
      question: "What is React?"
    },

    {
      question: "Difference between SQL and NoSQL?"
    },

    {
      question: "Explain OOP concepts."
    },

    {
      question: "What are your strengths?"
    },

    {
      question: "What are your weaknesses?"
    }

  ]


  // STATES

  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [completed, setCompleted] = useState(false)

  const [answers, setAnswers] = useState([])

  const [currentAnswer, setCurrentAnswer] = useState("")


  // NEXT QUESTION

  function nextQuestion() {

    const updatedAnswers = [

      ...answers,

      {
        question: questions[currentQuestion].question,
        answer: currentAnswer
      }

    ]

    setAnswers(updatedAnswers)

    setCurrentAnswer("")

    const next = currentQuestion + 1

    if(next < questions.length) {

      setCurrentQuestion(next)

    }

    else {

      setCompleted(true)

    }

  }


  return (

    <div className="flex">

      <Sidebar />


      <div className="flex-1 p-6 bg-gray-100 min-h-screen">

        <h1 className="text-4xl font-bold mb-10">
          Mock Interview
        </h1>


        {!completed ? (

          <div className="bg-white p-8 rounded-2xl shadow-md max-w-4xl">

            <h2 className="text-2xl font-bold mb-8">

              Question {currentQuestion + 1}

            </h2>


            <p className="text-2xl mb-8">

              {questions[currentQuestion].question}

            </p>


            <textarea
              placeholder="Type your answer here..."
              value={currentAnswer}
              onChange={(e) =>
                setCurrentAnswer(e.target.value)
              }
              className="w-full border p-4 rounded-xl h-40"
            />


            <button
              onClick={nextQuestion}
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl"
            >

              Next Question

            </button>

          </div>

        ) : (

          <div className="bg-white p-8 rounded-2xl shadow-md">

            <h2 className="text-4xl font-bold mb-8">
              Interview Completed
            </h2>


            <div className="space-y-6">

              {answers.map((item, index) => (

                <div
                  key={index}
                  className="border p-4 rounded-xl"
                >

                  <h3 className="font-bold text-xl mb-3">
                    {item.question}
                  </h3>

                  <p className="text-gray-700">
                    {item.answer}
                  </p>

                </div>

              ))}

            </div>

          </div>

        )}

      </div>

    </div>

  )
}