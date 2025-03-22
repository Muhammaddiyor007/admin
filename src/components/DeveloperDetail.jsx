import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DeveloperDetail = () => {
  const { id } = useParams();
  const [developer, setDeveloper] = useState(null);
  const [loading, setLoading] = useState(true);
  const [postText, setPostText] = useState("");
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://nt-devconnector.onrender.com/api/profile/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDeveloper(data);
        setLoading(false);
      })
      .catch((err) => console.error("Xatolik:", err));
    
    fetchPosts(id);
  }, [id]);

  const fetchPosts = (developerId) => {
    fetch(`https://nt-devconnector.onrender.com/api/posts?userId=${developerId}`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Xatolik:", err));
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!postText.trim()) return;

    fetch("https://nt-devconnector.onrender.com/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: postText, userId: id }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage("Post muvaffaqiyatli qo'shildi!");
        setPostText("");
        fetchPosts(id); 
      })
      .catch((err) => console.error("Xatolik:", err));
  };

  if (loading) return <h2>Yuklanmoqda...</h2>;
  if (!developer) return <h2>Ma'lumot topilmadi</h2>;

  return (
    <div>
      <h1>{developer.user?.name || "Ism kiritilmagan"}</h1>
      <img src={developer.user?.avatar} alt={developer.user?.name} width="150" />
      <p><strong>Kasb:</strong> {developer.status || "Ma'lumot yo'q"}</p>
      <p><strong>Kompaniya:</strong> {developer.company || "Ma'lumot yo'q"}</p>
      <p><strong>Joylashuv:</strong> {developer.location || "Ma'lumot yo'q"}</p>

      <h3>Yangi post qo‘shish:</h3>
      {message && <p className="text-green-500">{message}</p>}
      <form onSubmit={handlePostSubmit}>
        <textarea
          rows="4"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          placeholder="Post matnini kiriting..."
        />
        <button type="submit">Qo‘shish</button>
      </form>

      <h3>{developer.user?.name} ning postlari:</h3>
      <ul>
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post._id}>{post.text}</li>
          ))
        ) : (
          <p>Hozircha postlar yo‘q</p>
        )}
      </ul>
    </div>
  );
};

export default DeveloperDetail;
