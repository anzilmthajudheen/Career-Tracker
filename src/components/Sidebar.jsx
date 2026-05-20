import { Link } from "react-router-dom"

import {
  FaHome,
  FaBuilding,
  FaBriefcase,
  FaUniversity,
  FaChartBar,
  FaQuestionCircle,
  FaUserTie
} from "react-icons/fa"

export default function Sidebar() {

  return (

    <div className="w-72 min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6 shadow-2xl">

      <h1 className="text-3xl font-bold mb-10 text-center">
        Career Platform
      </h1>


      <div className="space-y-4">

        <Link
          to="/"
          className="flex items-center gap-3 bg-gray-800 hover:bg-blue-600 p-4 rounded-xl transition"
        >
          <FaHome />
          Dashboard
        </Link>


        <Link
          to="/companies"
          className="flex items-center gap-3 bg-gray-800 hover:bg-blue-600 p-4 rounded-xl transition"
        >
          <FaBuilding />
          Companies
        </Link>


        <Link
          to="/applications"
          className="flex items-center gap-3 bg-gray-800 hover:bg-blue-600 p-4 rounded-xl transition"
        >
          <FaBriefcase />
          Applications
        </Link>


        <Link
          to="/govt"
          className="flex items-center gap-3 bg-gray-800 hover:bg-blue-600 p-4 rounded-xl transition"
        >
          <FaUniversity />
          Govt & PSU
        </Link>


        <Link
          to="/analytics"
          className="flex items-center gap-3 bg-gray-800 hover:bg-blue-600 p-4 rounded-xl transition"
        >
          <FaChartBar />
          Analytics
        </Link>


        <Link
          to="/mcq"
          className="flex items-center gap-3 bg-gray-800 hover:bg-blue-600 p-4 rounded-xl transition"
        >
          <FaQuestionCircle />
          MCQ Tests
        </Link>


        <Link
          to="/mock"
          className="flex items-center gap-3 bg-gray-800 hover:bg-blue-600 p-4 rounded-xl transition"
        >
          <FaUserTie />
          Mock Interviews
        </Link>

      </div>

    </div>

  )
}