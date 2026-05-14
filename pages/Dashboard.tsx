import Terminal from "../components/Terminal";
import SignalCard from "../components/SignalCard";

export default function Dashboard() {
  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "20px"
      }}
    >
      <h1>⚡ Axis Terminal</h1>

      <Terminal />

      <div style={{ marginTop: 20 }}>
        <SignalCard />
      </div>
    </div>
  );
}
