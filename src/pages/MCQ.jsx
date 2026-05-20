import { useState } from "react"
import Sidebar from "../components/Sidebar"

export default function MCQ() {

  // QUESTIONS

  const questions = [

    {
      question: "What does DBMS stand for?",

      options: [
        "Database Management System",
        "Digital Base Management",
        "Data Backup Main System",
        "None"
      ],

      answer: "Database Management System"
    },

    {
      question: "Which language is used for React?",

      options: [
        "Python",
        "Java",
        "JavaScript",
        "C++"
      ],

      answer: "JavaScript"
    },

    {
      question: "What is the full form of CPU?",

      options: [
        "Central Processing Unit",
        "Computer Processing Unit",
        "Central Program Utility",
        "None"
      ],

      answer: "Central Processing Unit"
    }

  ]


  // STATES

  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [score, setScore] = useState(0)

  const [showResult, setShowResult] = useState(false)


  // HANDLE ANSWER

  function handleAnswer(option) {

    if(option === questions[currentQuestion].answer) {

      setScore(score + 1)

    }

    const nextQuestion =
      currentQuestion + 1

    if(nextQuestion < questions.length) {

      setCurrentQuestion(nextQuestion)

    }

    else {

      setShowResult(true)

    }

  }


  return (

    <div className="flex">

      <Sidebar />


      <div className="flex-1 p-6 bg-gray-100 min-h-screen">

        <h1 className="text-4xl font-bold mb-10">
          MCQ Test System
        </h1>


        {!showResult ? (

          <div className="bg-white p-8 rounded-2xl shadow-md max-w-3xl">

            <h2 className="text-2xl font-bold mb-6">

              Question {currentQuestion + 1}

            </h2>


            <p className="text-xl mb-8">

              {questions[currentQuestion].question}

            </p>


            <div className="space-y-4">

              {questions[currentQuestion].options.map((option, index) => (

                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="block w-full text-left bg-blue-100 hover:bg-blue-300 p-4 rounded-xl"
                >

                  {option}

                </button>

              ))}

            </div>

          </div>

        ) : (

          <div className="bg-white p-10 rounded-2xl shadow-md max-w-xl">

            <h2 className="text-4xl font-bold mb-6">
              Test Completed
            </h2>

            <p className="text-2xl">

              Your Score:

              <span className="font-bold text-blue-600">
                {" "} {score} / {questions.length}
              </span>

            </p>

          </div>

        )}

      </div>

    </div>

  )
}