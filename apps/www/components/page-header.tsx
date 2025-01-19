interface PageHeaderProps {
  className?: string;
  children: React.ReactNode;
  title: string;
  description?: string;
}

export default function PageHeader({
  className,
  children,
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className={`mx-auto max-w-3xl ${className || ""}`}>
      <div className="text-center">
        <div className="relative mb-5 flex items-center justify-center gap-4 before:h-px before:w-24 before:border-b before:shadow-sm before:shadow-white/20 before:[border-image:linear-gradient(to_left,theme(colors.indigo.300),transparent)1] after:h-px after:w-24 after:border-b after:shadow-sm after:shadow-white/20 after:[border-image:linear-gradient(to_right,theme(colors.indigo.300),transparent)1] dark:before:shadow-none dark:before:[border-image:linear-gradient(to_left,theme(colors.indigo.300/.16),transparent)1] dark:after:shadow-none dark:after:[border-image:linear-gradient(to_right,theme(colors.indigo.300/.16),transparent)1]">
          <div className="relative inline-flex whitespace-nowrap rounded-lg bg-white px-3 py-[3px] text-sm font-medium tracking-normal text-gray-700 shadow before:absolute before:inset-0 before:rounded-lg before:[background-image:linear-gradient(120deg,transparent_0%,theme(colors.indigo.400/.12)_33%,theme(colors.pink.400/.12)_66%,theme(colors.amber.200/.12)_100%)] dark:bg-gray-700 dark:before:[background-image:linear-gradient(120deg,theme(colors.indigo.400/.16),theme(colors.indigo.600/.16)_50%,transparent_100%)]">
            {/* Border with dots in corners */}
            <div
              className="absolute -inset-1.5 -z-10 rounded-sm bg-indigo-500/15 before:absolute before:inset-y-0 before:left-0 before:w-[7px] before:bg-[length:7px_7px] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_0.5px,transparent_0.5px)] before:[background-position:top_center,bottom_center] after:absolute after:inset-y-0 after:right-0 after:w-[7px] after:bg-[length:7px_7px] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_0.5px,transparent_0.5px)] after:[background-position:top_center,bottom_center] dark:bg-gray-800/65 dark:before:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.gray.600/.56)_0.5px,transparent_0.5px)] dark:after:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.gray.600/.56)_0.5px,transparent_0.5px)]"
              aria-hidden="true"
            />
            <span className="relative text-gray-800 dark:bg-gradient-to-b dark:from-indigo-500 dark:to-indigo-50 dark:bg-clip-text dark:text-transparent">
              {children}
            </span>
          </div>
        </div>
        <div>
          <h1 className="pb-4 font-inter-tight text-5xl font-bold text-gray-800 dark:bg-gradient-to-b dark:from-indigo-200 dark:to-gray-200 dark:bg-clip-text dark:text-transparent md:text-6xl">
            {title}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
