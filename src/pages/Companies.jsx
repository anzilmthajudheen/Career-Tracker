import Sidebar from "../components/Sidebar"
import companies from "../data/companies"

export default function Companies() {

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-6 bg-gray-100 min-h-screen">

        <h1 className="text-4xl font-bold mb-8">
          Companies
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {companies.map((company) => (

            <div
              key={company.id}
              className="bg-white p-6 rounded-2xl shadow-md"
            >

              <h2 className="text-2xl font-bold">
                {company.name}
              </h2>

              <p className="mt-2">
                {company.category}
              </p>

              <p>
                {company.location}
              </p>

              <a
                href={company.careerPage}
                target="_blank"
                className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Visit Careers
              </a>

            </div>

          ))}

        </div>

      </div>

    </div>

  )
}