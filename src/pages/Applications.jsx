import { useState, useEffect } from "react"
import Sidebar from "../components/Sidebar"

export default function Applications() {

  // INPUT STATE
  const [company, setCompany] = useState("")

  // APPLICATIONS STATE
  const [applications, setApplications] = useState([])

  // SEARCH STATE
  const [search, setSearch] = useState("")

  // FILTER STATE
  const [filter, setFilter] = useState("All")


  // LOAD SAVED DATA
  useEffect(() => {

    const savedApplications =
      localStorage.getItem("applications")

    if(savedApplications) {

      setApplications(
        JSON.parse(savedApplications)
      )

    }

  }, [])


  // SAVE DATA
  useEffect(() => {

    localStorage.setItem(
      "applications",
      JSON.stringify(applications)
    )

  }, [applications])


  // ADD APPLICATION
  function addApplication() {

    if(company.trim() === "") return

    const newApplication = {

      name: company,

      status: "Applied",

      date: new Date().toLocaleDateString()

    }

    setApplications((prev) => [
      ...prev,
      newApplication
    ])

    setCompany("")
  }


  // UPDATE STATUS
  function updateStatus(index, newStatus) {

    const updatedApplications = [...applications]

    updatedApplications[index].status = newStatus

    setApplications(updatedApplications)
  }


  // DELETE APPLICATION
  function deleteApplication(index) {

    const updatedApplications =
      applications.filter((_, i) => i !== index)

    setApplications(updatedApplications)
  }


  return (

    <div className="flex">

      {/* SIDEBAR */}

      <Sidebar />


      {/* MAIN CONTENT */}

      <div className="flex-1 p-6 min-h-screen bg-gray-100">

        {/* PAGE TITLE */}

        <h1 className="text-4xl font-bold mb-8">
          Applications Tracker
        </h1>


        {/* ADD APPLICATION */}

        <div className="bg-white p-6 rounded-2xl shadow-md mb-8">

          <h2 className="text-2xl font-semibold mb-4">
            Add Application
          </h2>

          <div className="flex gap-4">

            <input
              type="text"
              placeholder="Enter company name"
              value={company}
              onChange={(e) =>
                setCompany(e.target.value)
              }
              className="border p-3 rounded-lg flex-1"
            />

            <button
              onClick={addApplication}
              className="bg-blue-600 text-white px-6 rounded-lg"
            >
              Add
            </button>

          </div>

        </div>


        {/* SEARCH + FILTER */}

        <div className="bg-white p-6 rounded-2xl shadow-md mb-8">

          <h2 className="text-2xl font-semibold mb-4">
            Search & Filter
          </h2>

          <div className="flex gap-4 flex-wrap">

            <input
              type="text"
              placeholder="Search company..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="border p-3 rounded-lg flex-1"
            />

            <select
              value={filter}
              onChange={(e) =>
                setFilter(e.target.value)
              }
              className="border p-3 rounded-lg"
            >

              <option>All</option>
              <option>Applied</option>
              <option>Assessment</option>
              <option>HR Round</option>
              <option>Technical</option>
              <option>Final Round</option>
              <option>Selected</option>
              <option>Rejected</option>

            </select>

          </div>

        </div>


        {/* APPLICATION LIST */}

        <div className="space-y-6">

          {applications

            .filter((app) => {

              const matchesSearch =

                app.name
                  .toLowerCase()
                  .includes(search.toLowerCase())

              const matchesFilter =

                filter === "All" ||
                app.status === filter

              return matchesSearch && matchesFilter
            })

            .map((app, index) => (

              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md flex justify-between items-center flex-wrap gap-4"
              >

                <div>

                  <h2 className="text-2xl font-bold">
                    {app.name}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Applied on: {app.date}
                  </p>

                  <select
                    value={app.status}
                    onChange={(e) =>
                      updateStatus(index, e.target.value)
                    }
                    className="border mt-4 p-2 rounded-lg"
                  >

                    <option>Applied</option>
                    <option>Assessment</option>
                    <option>HR Round</option>
                    <option>Technical</option>
                    <option>Final Round</option>
                    <option>Selected</option>
                    <option>Rejected</option>

                  </select>

                </div>


                <button
                  onClick={() =>
                    deleteApplication(index)
                  }
                  className="bg-red-500 text-white px-5 py-2 rounded-lg"
                >
                  Delete
                </button>

              </div>

            ))}

        </div>

      </div>

    </div>

  )
}