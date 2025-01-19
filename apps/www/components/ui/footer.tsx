export default function Footer() {
  return (
    <footer className="border-t shadow-[0_1px_0_0_theme(colors.white/.2)] [border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.4),transparent)1] dark:shadow-none dark:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1]">
      <div className="px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="py-8 text-center">
            <p className="text-sm text-gray-700 dark:text-gray-400">
              © Strapex - A more meaningful way of making online payments.
              Built by{" "}
              <a
                className="font-medium text-indigo-500 hover:underline"
                href="https://x.com/machuwey"
                target="_blank"
              >
                @machuwey
              </a>{" "}
              &amp;{" "}
              <a
                className="font-medium text-indigo-500 hover:underline"
                href="https://x.com/jmartinn07"
                target="_blank"
              >
                @jmartinn.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
