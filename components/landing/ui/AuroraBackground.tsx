export default function AuroraBackground({
  className = "",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  return (
    <div
      className={`aurora-bg ${variant === "dark" ? "[&::before]:opacity-40 [&::after]:opacity-30" : ""} ${className}`}
      aria-hidden="true"
    >
      <div
        className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-[80%] h-[50%] rounded-full blur-[120px] ${
          variant === "light" ? "bg-aurora-3/30" : "bg-accent/20"
        }`}
      />
    </div>
  );
}
