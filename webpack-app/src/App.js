import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  console.log("Webpack Render");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(res => setData(res.slice(0, 50)));
  }, []);

  return (
    <div>
      <h1>Webpack App 🚀</h1>
      {data.map(item => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default App;