export default function CompanyCard({ company }) {

  return (

    <div className="bg-white p-6 rounded-2xl shadow-md">

      <h2 className="text-2xl font-bold">
        {company.name}
      </h2>

      <p className="mt-2 text-gray-600">
        {company.category}
      </p>

      <p className="text-gray-500">
        {company.location}
      </p>

      <p className="mt-2 font-semibold">
        Status: {company.status}
      </p>

      <a
        href={company.careerPage}
        target="_blank"
        className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Visit Careers
      </a>

    </div>

  )
}