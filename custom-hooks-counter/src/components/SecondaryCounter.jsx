import useCounter from "../hooks/useCounter";
import Display from "./Display";

export default function SecondaryCounter() {
  const { count, increment, decrement } = useCounter(10); // Start at 10 to show independence

  return (
    <div style={{
      padding: "30px",
      borderRadius: "16px",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      backgroundColor: "#ffffff",
      textAlign: "center",
      width: "100%",
      maxWidth: "350px",
      boxSizing: "border-box"
    }}>
      <h2 style={{ color: "#4b5563", fontSize: "1.5rem", margin: "0 0 10px 0" }}>Secondary Counter</h2>
      <p style={{ color: "#9ca3af", fontSize: "0.9rem", margin: "0 0 20px 0", fontStyle: "italic" }}>starts at 10</p>
      
      <Display count={count} />
      
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "10px" }}>
        <button 
          onClick={decrement}
          style={{ padding: "10px 20px", fontSize: "16px", fontWeight: "600", backgroundColor: "#f87171", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", transition: "background-color 0.2s" }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#ef4444'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#f87171'}
        >
          - 1
        </button>
        <button 
          onClick={increment}
          style={{ padding: "10px 20px", fontSize: "16px", fontWeight: "600", backgroundColor: "#34d399", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", transition: "background-color 0.2s" }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#10b981'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#34d399'}
        >
          + 1
        </button>
      </div>
    </div>
  );
}
