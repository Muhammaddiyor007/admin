import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DeveloperList = () => {
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);
  const developersPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("https://nt-devconnector.onrender.com/api/profile")
      .then((res) => res.json())
      .then((data) => {
        setDevelopers(data);
        setLoading(false);
      })
      .catch((err) => console.error("Xatolik:", err));
  }, []);

  if (loading) return <h2 className="text-center text-xl font-semibold mt-10">Yuklanmoqda...</h2>;

  const totalPages = Math.ceil(developers.length / developersPerPage);

  const indexOfLastDeveloper = currentPage * developersPerPage;
  const indexOfFirstDeveloper = indexOfLastDeveloper - developersPerPage;
  const currentDevelopers = developers.slice(indexOfFirstDeveloper, indexOfLastDeveloper);

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Top Dasturchilar</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {currentDevelopers.map((dev) => (
          <div 
            key={dev._id} 
            className="bg-white shadow-lg rounded-lg p-5 flex flex-col gap-5"
          >
            <div className="flex items-center gap-5">
              <img
                src={dev.user?.avatar}
                alt={dev.user?.name}
                className="w-16 h-16 rounded-full border-2 border-blue-500"
              />
              <div>
                <h2 className="text-xl font-semibold">{dev.user?.name || "Ism yo'q"}</h2>
                <p className="text-gray-600"><strong>Kasb:</strong> {dev.status}</p>
                <p className="text-gray-600"><strong>Kompaniya:</strong> {dev.company || "Mavjud emas"}</p>
                <p className="text-gray-600"><strong>Joylashuv:</strong> {dev.location || "Noma'lum"}</p>
              </div>
            </div>
            <Link to={`/developer/${dev._id}`} className="text-blue-500 underline">
              Profilni ko‘rish
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <button 
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} 
          disabled={currentPage === 1} 
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md disabled:opacity-50"
        >
          ⬅ Oldingi
        </button>

        <span className="text-lg font-semibold">Sahifa: {currentPage} / {totalPages}</span>

        <button 
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} 
          disabled={currentPage === totalPages} 
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md disabled:opacity-50"
        >
          Keyingi ➡
        </button>
      </div>

      <div className="flex justify-center items-center gap-2 mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-2 rounded-md ${
              currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DeveloperList;
