import { useState, useTransition, useDeferredValue, useEffect } from "react";
import Search from "./components/Search";
import List from "./components/List";

const data = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

function App() {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const [isPending, startTransition] = useTransition();

  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    startTransition(() => {
      const result = data.filter((item) =>
        item.toLowerCase().includes(deferredQuery.toLowerCase())
      );
      setFilteredData(result);
    });
  }, [deferredQuery]);

  const handleChange = (value) => {
    setQuery(value);
  };

  return (
    <div>
      <h1>React Performance Demo</h1>

      <Search query={query} onChange={handleChange} />

      {isPending && <p>Filtering...</p>}

      <List items={filteredData} />
    </div>
  );
}

export default App;