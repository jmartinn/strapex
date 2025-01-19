import type { Metadata } from "next";

import PageHeader from "@/components/page-header";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Strapex team to learn about our payment infrastructure, discuss partnerships, or get technical support.",
};

export default function Contact() {
  return (
    <section>
      <div className="pb-12 pt-32 md:pb-20 md:pt-44">
        <div className="px-4 sm:px-6">
          <PageHeader
            className="mb-12 md:mb-20"
            title="Get in touch"
            description="Connect with our team to learn more about Strapex's payment infrastructure, discuss partnership opportunities, or get technical support."
          >
            Contact us
          </PageHeader>

          {/* Contact form */}
          <div className="relative mb-16 flex items-center justify-center gap-10 pb-3 before:h-px before:w-full before:border-b before:shadow-sm before:shadow-white/20 before:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.8),transparent)1] after:h-px after:w-full after:border-b after:shadow-sm after:shadow-white/20 after:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.8),transparent)1] dark:before:shadow-none dark:before:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] dark:after:shadow-none dark:after:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1]">
            <div className="mx-auto w-full max-w-xs shrink-0">
              <form className="relative">
                {/* Border with dots in corners */}
                <div
                  className="absolute -inset-3 -z-10 rounded-lg bg-indigo-500/15 before:absolute before:inset-y-0 before:left-0 before:w-[15px] before:bg-[length:15px_15px] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1.5px,transparent_1.5px)] before:[background-position:top_center,bottom_center] after:absolute after:inset-y-0 after:right-0 after:w-[15px] after:bg-[length:15px_15px] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1.5px,transparent_1.5px)] after:[background-position:top_center,bottom_center] dark:bg-transparent dark:bg-gradient-to-b dark:from-gray-700/80 dark:to-gray-700/70 dark:before:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px)] dark:after:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px)]"
                  aria-hidden="true"
                />
                <div className="space-y-5">
                  <div className="space-y-3">
                    <div>
                      <label className="sr-only" htmlFor="name">
                        Name
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500/70 dark:text-gray-400/70">
                          <svg
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                          >
                            <path d="M14.9 0c-.3 0-8.4.8-11.6 4-2.8 2.8-2.2 6.5-1.2 8.5L.3 14.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l1.8-1.8c.9.4 2.2.8 3.6.8 1.6 0 3.3-.5 4.9-2 3.4-3.4 4-11.3 4-11.6 0-.3-.1-.6-.3-.8-.2-.2-.5-.3-.8-.3Zm-4.3 11.3c-1.9 1.9-4.2 1.5-5.5 1.1L9.4 8c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L3.6 11c-.4-1.4-.8-3.7 1.1-5.6 1.9-1.9 6.5-2.9 9.2-3.3-.3 2.3-1.1 7-3.3 9.2Z" />
                          </svg>
                        </div>
                        <input
                          id="name"
                          className="form-input w-full pl-10 pr-4 text-sm"
                          type="text"
                          placeholder="Your full name..."
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500/70 dark:text-gray-400/70">
                          <svg
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={14}
                          >
                            <path d="M14 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 12H2V5.723l5.504 3.145a.998.998 0 0 0 .992 0L14 5.723V12Zm0-8.58L8 6.849 2 3.42V2h12v1.42Z" />
                          </svg>
                        </div>
                        <input
                          id="email"
                          className="form-input w-full pl-10 pr-4 text-sm"
                          type="email"
                          placeholder="Your email..."
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="company">
                        Company size
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500/70 dark:text-gray-400/70">
                          <svg
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                          >
                            <path d="m5.2.02 10 2A1 1 0 0 1 16 3v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3V1A1 1 0 0 1 5.2.02ZM2 12v2h4v-2H2Zm0-4v2h4V8H2Zm6 6h6V3.82l-8-1.6V6h1a1 1 0 0 1 1 1v7Zm2-8h2v6h-2V6Z" />
                          </svg>
                        </div>
                        <select
                          id="company"
                          className="form-select w-full pl-10 text-sm"
                          defaultValue={0}
                          required
                        >
                          <option value="0" disabled hidden>
                            Company size
                          </option>
                          <option value="1">1 to 5 members</option>
                          <option value="2">5 to 20 members</option>
                          <option value="3">More than 20 members</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="form-textarea w-full resize-none text-sm"
                        placeholder="Tell us about your project and how we can help..."
                        rows={3}
                        required
                        defaultValue={""}
                      />
                    </div>
                    <div>
                      <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="ml-2 text-sm text-gray-500">
                          Keep me updated with Strapex news and product releases
                        </span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <button className="btn w-full bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* Cards */}
          <div className="mx-auto max-w-xs md:max-w-6xl">
            <div className="grid gap-6 max-md:-mx-3 md:grid-cols-3 xl:mx-8 xl:gap-9">
              {/* Card */}
              <div className="flex flex-col rounded-lg bg-gradient-to-tr from-white/70 to-white/50 p-5 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40">
                <div className="mb-3 grow">
                  <div className="mb-1 font-inter-tight font-semibold text-gray-800 dark:text-gray-200">
                    Email
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-500">
                    Our team typically responds within 24 hours on business
                    days.
                  </p>
                </div>
                <div className="flex items-center space-x-2.5">
                  <svg
                    className="shrink-0 fill-indigo-500/80"
                    width={16}
                    height={16}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 0a8 8 0 1 0 3.2 15.335l.916-.4-.8-1.833-.916.4A6 6 0 1 1 14 8v1a1 1 0 1 1-2 0V8a4.033 4.033 0 1 0-1.286 2.92A2.987 2.987 0 0 0 16 9V8a8.009 8.009 0 0 0-8-8Zm0 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
                  </svg>
                  <a
                    className="text-sm text-gray-800 dark:text-gray-200"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="mailto:hello@strapex.io"
                  >
                    hello@strapex.io
                  </a>
                </div>
              </div>
              {/* Card */}
              <div className="flex flex-col rounded-lg bg-gradient-to-tr from-white/70 to-white/50 p-5 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40">
                <div className="mb-3 grow">
                  <div className="mb-1 font-inter-tight font-semibold text-gray-800 dark:text-gray-200">
                    Schedule a Call
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-500">
                    Book a demo or consultation call with our founder.
                  </p>
                </div>
                <div className="flex items-center space-x-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-calendar-clock shrink-0 stroke-indigo-500/80"
                  >
                    <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
                    <path d="M16 2v4" />
                    <path d="M8 2v4" />
                    <path d="M3 10h5" />
                    <path d="M17.5 17.5 16 16.3V14" />
                    <circle cx="16" cy="16" r="6" />
                  </svg>
                  <div className="text-sm font-medium text-gray-800 hover:underline dark:text-gray-200">
                    <a
                      href="https://calendly.com/matvey"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      calendly.com/matvey
                    </a>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="flex flex-col rounded-lg bg-gradient-to-tr from-white/70 to-white/50 p-5 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40">
                <div className="mb-3 grow">
                  <div className="mb-1 font-inter-tight font-semibold text-gray-800 dark:text-gray-200">
                    Join Our Community
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-500">
                    Connect with other developers and stay updated on the latest
                    features.
                  </p>
                </div>
                <div className="flex items-center space-x-2.5">
                  <svg
                    viewBox="0 0 127.14 96.36"
                    className="shrink-0 fill-indigo-500/80"
                    width={16}
                    height={18}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M107.7 8.07A105.2 105.2 0 0 0 81.47 0a72 72 0 0 0-3.36 6.83 97.7 97.7 0 0 0-29.11 0A72 72 0 0 0 45.64 0a106 106 0 0 0-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.7 105.7 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.4 68.4 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.7 68.7 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.3 105.3 0 0 0 32.19-16.14c2.64-27.38-4.51-51.11-18.9-72.15M42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53s-5.05 12.69-11.44 12.69m42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53s-5.04 12.69-11.43 12.69" />
                  </svg>
                  <div className="text-sm font-medium text-gray-800 hover:underline dark:text-gray-200">
                    <a
                      href="https://discord.gg/R7dmDdaGQb"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      discord.gg/strapex
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
