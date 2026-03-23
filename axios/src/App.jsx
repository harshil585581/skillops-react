import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);
  const getCatFact = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://catfact.ninja/fact"); 
      setFact(response.data.fact);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCatFact(); // call on load

  },[count]);
 
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Cat Fact App</h1>

      {/* {loading ? <p>Loading...</p> : <p>{fact}</p>} */}

      if(loading){<p>loading.....</p>}else{{fact}}

      <button onClick={getCatFact}>Get New Fact</button>
    </div>
  );
}

export default App;
