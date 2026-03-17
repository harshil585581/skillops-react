import { useEffect } from "react";
import useCounter from "../hooks/useCounter";
import Display from "./Display";

export default function CounterDashboard() {
  const { count, increment, decrement } = useCounter(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div
      style={{
        padding: "40px",
        borderRadius: "20px",
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        backgroundColor: "#ffffff",
        textAlign: "center",
        width: "100%",
        maxWidth: "450px",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{ color: "#1f2937", margin: "0 0 10px 0", fontSize: "2.2rem" }}
      >
        Primary Counter
      </h1>

      <Display count={count} />

      <div
        style={{
          display: "flex",
          gap: "15px",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <button
          onClick={decrement}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            fontWeight: "bold",
            backgroundColor: "#ef4444",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "transform 0.1s, background-color 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#dc2626")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#ef4444")}
          onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")}
          onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
        >
          Decrement
        </button>
        <button
          onClick={increment}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            fontWeight: "bold",
            backgroundColor: "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "transform 0.1s, background-color 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#2563eb")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#3b82f6")}
          onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")}
          onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
        >
          Increment
        </button>
      </div>
    </div>
  );
}
