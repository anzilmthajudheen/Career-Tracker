import govtExams from "../data/govtExams"
import Sidebar from "../components/Sidebar"

export default function GovtExams() {

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-6 bg-gray-100 min-h-screen">

        <h1 className="text-4xl font-bold mb-8">
          Government Exams
        </h1>

        <div className="grid gap-6">

          {govtExams.map((exam) => (

            <div
              key={exam.id}
              className="bg-white p-6 rounded-2xl shadow-md"
            >

              <h2 className="text-2xl font-bold">
                {exam.name}
              </h2>

              <p className="mt-2">
                {exam.category}
              </p>

              <p className="mt-2">
                Status: {exam.status}
              </p>

              <a
                href={exam.website}
                target="_blank"
                className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Visit Website
              </a>

            </div>

          ))}

        </div>

      </div>

    </div>

  )
}