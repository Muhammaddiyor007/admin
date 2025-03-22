import { useState } from "react";

const AddPost = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://nt-devconnector.onrender.com/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage("Post muvaffaqiyatli qo'shildi!");
        setText("");
      })
      .catch((err) => console.error("Xatolik:", err));
  };

  return (
    <div>
      <h2>Yangi Post Qo'shish</h2>
      {message && <p style={{ color: "green" }}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          cols="50"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Post matnini kiriting..."
        />
        <br />
        <button type="submit">Qo'shish</button>
      </form>
    </div>
  );
};

export default AddPost;
