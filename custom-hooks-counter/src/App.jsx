import CounterDashboard from "./components/CounterDashboard";
import SecondaryCounter from "./components/SecondaryCounter";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        // minHeight: "100vh",
        paddingTop: "20px",
        paddingBottom: "20px",
        backgroundColor: "#f9fafb",
      }}
    >
      <CounterDashboard />
      <SecondaryCounter />
    </div>
  );
}

export default App;
