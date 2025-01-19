import SubscribeForm from "@/components/subscribe-form";

export default function Cta() {
  return (
    <section>
      <div className="pb-12 md:pb-20">
        <div className="px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 border-t pt-12 text-center shadow-[inset_0_1px_0_0_theme(colors.white/.2)] [border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.72),transparent)1] dark:shadow-none dark:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] md:pt-20">
              <h2 className="pb-4 font-inter-tight text-4xl font-bold text-gray-800 dark:bg-gradient-to-b dark:from-indigo-200 dark:to-gray-200 dark:bg-clip-text dark:text-transparent md:text-5xl">
                Become part of our community
              </h2>
            </div>
          </div>

          <SubscribeForm />
        </div>
      </div>
    </section>
  );
}
