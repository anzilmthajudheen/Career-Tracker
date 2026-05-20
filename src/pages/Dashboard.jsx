import deadlines from "../data/deadlines"
import Sidebar from "../components/Sidebar"
import companies from "../data/companies"
import govtExams from "../data/govtExams"

export default function Dashboard() {

  const savedApplications =
    JSON.parse(localStorage.getItem("applications")) || []

  const totalCompanies = companies.length

  const appliedCompanies =
    savedApplications.length

  const selectedCompanies =
    savedApplications.filter(
      (app) => app.status === "Selected"
    ).length

  const rejectedCompanies =
    savedApplications.filter(
      (app) => app.status === "Rejected"
    ).length

  const totalGovtExams =
    govtExams.length

  return (

    <div className="flex">

      {/* SIDEBAR */}

      <Sidebar />


      {/* MAIN CONTENT */}

      <div className="flex-1 p-6 bg-gray-100 min-h-screen">

        <h1 className="text-4xl font-bold mb-8">
          Career Dashboard
        </h1>


        {/* STATS */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow-md">

            <h2 className="text-xl font-semibold">
              Total Companies
            </h2>

            <p className="text-4xl font-bold mt-4 text-blue-600">
              {totalCompanies}
            </p>

          </div>


          <div className="bg-white p-6 rounded-2xl shadow-md">

            <h2 className="text-xl font-semibold">
              Applications Sent
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-600">
              {appliedCompanies}
            </p>

          </div>


          <div className="bg-white p-6 rounded-2xl shadow-md">

            <h2 className="text-xl font-semibold">
              Govt Exams
            </h2>

            <p className="text-4xl font-bold mt-4 text-purple-600">
              {totalGovtExams}
            </p>

          </div>


          <div className="bg-white p-6 rounded-2xl shadow-md">

            <h2 className="text-xl font-semibold">
              Selected
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-700">
              {selectedCompanies}
            </p>

          </div>


          <div className="bg-white p-6 rounded-2xl shadow-md">

            <h2 className="text-xl font-semibold">
              Rejected
            </h2>

            <p className="text-4xl font-bold mt-4 text-red-600">
              {rejectedCompanies}
            </p>

          </div>

        </div>


        {/* RECENT APPLICATIONS */}

        <div className="bg-white p-6 rounded-2xl shadow-md mt-10">

          <h2 className="text-2xl font-bold mb-6">
            Recent Applications
          </h2>

          <div className="space-y-4">

            {savedApplications.slice(-5).map((app, index) => (

              <div
                key={index}
                className="border p-4 rounded-xl flex justify-between"
              >

                <div>

                  <h3 className="font-bold text-lg">
                    {app.name}
                  </h3>

                  <p className="text-gray-500">
                    {app.date}
                  </p>

                </div>

                <p className="font-semibold">
                  {app.status}
                </p>

              </div>

            ))}

          </div>

        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md mt-10">

  <h2 className="text-2xl font-bold mb-6">
    Upcoming Deadlines
  </h2>

  <div className="space-y-4">

    {deadlines.map((item) => (

      <div
        key={item.id}
        className="border p-4 rounded-xl flex justify-between"
      >

        <div>

          <h3 className="font-bold text-lg">
            {item.title}
          </h3>

          <p className="text-gray-500">
            {item.type}
          </p>

        </div>

        <p className="font-semibold text-red-600">
          {item.date}
        </p>

      </div>

    ))}

  </div>

</div>

      </div>

    </div>

  )
}