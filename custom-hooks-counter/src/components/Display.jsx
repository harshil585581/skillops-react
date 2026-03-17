export default function Display({ count }) {
  return (
    <div style={{ 
      fontSize: "3rem", 
      fontWeight: "bold",
      margin: "20px 0", 
      color: "#111827",
      backgroundColor: "#f3f4f6",
      padding: "10px 30px",
      borderRadius: "12px",
      display: "inline-block"
    }}>
      {count}
    </div>
  );
}
