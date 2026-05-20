export default function Navbar() {
  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold text-2xl">
        Career Platform
      </h1>

      <div className="flex gap-4">
        <button>Dashboard</button>
        <button>Applications</button>
        <button>Govt Exams</button>
      </div>
    </div>
  )
}