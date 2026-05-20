import Sidebar from "../components/Sidebar"

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
} from "chart.js"

import { Pie, Bar } from "react-chartjs-2"

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
)

export default function Analytics() {

  const applications =
    JSON.parse(localStorage.getItem("applications")) || []

  const applied =
    applications.filter(
      (app) => app.status === "Applied"
    ).length

  const selected =
    applications.filter(
      (app) => app.status === "Selected"
    ).length

  const rejected =
    applications.filter(
      (app) => app.status === "Rejected"
    ).length

  const technical =
    applications.filter(
      (app) => app.status === "Technical"
    ).length


  // PIE CHART DATA

  const pieData = {

    labels: [
      "Applied",
      "Selected",
      "Rejected",
      "Technical"
    ],

    datasets: [

      {
        data: [
          applied,
          selected,
          rejected,
          technical
        ],

        backgroundColor: [
          "#3B82F6",
          "#16A34A",
          "#DC2626",
          "#9333EA"
        ]
      }

    ]

  }


  // BAR CHART DATA

  const barData = {

    labels: [
      "Applied",
      "Selected",
      "Rejected",
      "Technical"
    ],

    datasets: [

      {
        label: "Applications",

        data: [
          applied,
          selected,
          rejected,
          technical
        ],

        backgroundColor: [
          "#2563EB",
          "#16A34A",
          "#DC2626",
          "#9333EA"
        ]
      }

    ]

  }


  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-6 bg-gray-100 min-h-screen">

        <h1 className="text-4xl font-bold mb-10">
          Analytics Dashboard
        </h1>


        {/* STATS */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

          <div className="bg-white p-6 rounded-2xl shadow-md">

            <h2 className="text-lg font-semibold">
              Applied
            </h2>

            <p className="text-4xl font-bold mt-4 text-blue-600">
              {applied}
            </p>

          </div>


          <div className="bg-white p-6 rounded-2xl shadow-md">

            <h2 className="text-lg font-semibold">
              Selected
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-600">
              {selected}
            </p>

          </div>


          <div className="bg-white p-6 rounded-2xl shadow-md">

            <h2 className="text-lg font-semibold">
              Rejected
            </h2>

            <p className="text-4xl font-bold mt-4 text-red-600">
              {rejected}
            </p>

          </div>


          <div className="bg-white p-6 rounded-2xl shadow-md">

            <h2 className="text-lg font-semibold">
              Technical Round
            </h2>

            <p className="text-4xl font-bold mt-4 text-purple-600">
              {technical}
            </p>

          </div>

        </div>


        {/* CHARTS */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          <div className="bg-white p-6 rounded-2xl shadow-md">

            <h2 className="text-2xl font-bold mb-6">
              Application Status
            </h2>

            <Pie data={pieData} />

          </div>


          <div className="bg-white p-6 rounded-2xl shadow-md">

            <h2 className="text-2xl font-bold mb-6">
              Application Overview
            </h2>

            <Bar data={barData} />

          </div>

        </div>

      </div>

    </div>

  )
}