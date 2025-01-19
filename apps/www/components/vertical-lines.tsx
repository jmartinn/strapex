export default function VerticalLines() {
  return (
    <div
      className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-[1102px] -translate-x-1/2"
      aria-hidden="true"
    >
      {/* Left side */}
      <div className="before:absolute before:inset-y-0 before:left-0 before:border-l before:shadow-[-1px_0_0_0_theme(colors.white/.2)] before:[border-image:linear-gradient(to_bottom,theme(colors.indigo.300/.4),transparent)1] after:absolute after:inset-y-0 after:left-20 after:border-l after:shadow-[-1px_0_0_0_theme(colors.white/.2)] after:[border-image:linear-gradient(to_bottom,theme(colors.indigo.300/.4),transparent)1] dark:before:shadow-none dark:before:[border-image:linear-gradient(to_bottom,theme(colors.indigo.300/.16),transparent)1] dark:after:shadow-none dark:after:[border-image:linear-gradient(to_bottom,theme(colors.indigo.300/.16),transparent)1]"></div>
      {/* Right side */}
      <div className="before:absolute before:inset-y-0 before:right-0 before:border-l before:shadow-[-1px_0_0_0_theme(colors.white/.2)] before:[border-image:linear-gradient(to_bottom,theme(colors.indigo.300/.4),transparent)1] after:absolute after:inset-y-0 after:right-20 after:border-l after:shadow-[-1px_0_0_0_theme(colors.white/.2)] after:[border-image:linear-gradient(to_bottom,theme(colors.indigo.300/.4),transparent)1] dark:before:shadow-none dark:before:[border-image:linear-gradient(to_bottom,theme(colors.indigo.300/.16),transparent)1] dark:after:shadow-none dark:after:[border-image:linear-gradient(to_bottom,theme(colors.indigo.300/.16),transparent)1]"></div>
    </div>
  );
}
