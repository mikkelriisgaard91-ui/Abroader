import { verticals } from "@/lib/verticals";

const vertical = verticals.find((v) => v.href === "/volunteering")!;

export default function VolunteeringPage() {
  return (
    <main
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        minHeight: "100%",
      }}
    >
      <h1
        style={{
          color: vertical.accent,
          fontSize: "2rem",
          fontWeight: 700,
          textAlign: "center",
          margin: 0,
        }}
      >
        {vertical.title}
      </h1>
    </main>
  );
}
