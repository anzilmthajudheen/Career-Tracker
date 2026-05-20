import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Companies from "./pages/Companies"
import Applications from "./pages/Applications"
import GovtExams from "./pages/GovtExams"
import Analytics from "./pages/Analytics"
import MCQ from "./pages/MCQ"
import MockInterview from "./pages/MockInterview"

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/companies"
          element={<Companies />}
        />

        <Route
          path="/applications"
          element={<Applications />}
        />

        <Route
          path="/govt"
          element={<GovtExams />}
        />

        <Route
          path="/analytics"
          element={<Analytics />}
        />

        <Route
          path="/mcq"
          element={<MCQ />}
        />

        <Route
          path="/mock"
          element={<MockInterview />}
        />

      </Routes>

    </BrowserRouter>

  )
}