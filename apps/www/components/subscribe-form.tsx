import Image from "next/image";
import Link from "next/link";

import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";

import { Icons } from "./ui/icons";

export default function SubscribeForm() {
  const githubStars = 2481;
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center space-y-8">
      <div className="mx-auto w-full max-w-xs shrink-0">
        <form className="relative">
          <div
            className="absolute -inset-3 -z-10 rounded-lg bg-indigo-500/15 before:absolute before:inset-y-0 before:left-0 before:w-[15px] before:bg-[length:15px_15px] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1.5px,transparent_1.5px)] before:[background-position:top_center,bottom_center] after:absolute after:inset-y-0 after:right-0 after:w-[15px] after:bg-[length:15px_15px] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1.5px,transparent_1.5px)] after:[background-position:top_center,bottom_center] dark:bg-transparent dark:bg-gradient-to-b dark:from-gray-700/80 dark:to-gray-700/70 dark:before:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px)] dark:after:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px)]"
            aria-hidden="true"
          />
          <div className="space-y-3">
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
                  placeholder="lost@space.com"
                  required
                />
                {/* <input */}
                {/*   id="email" */}
                {/*   className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 text-sm shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100" */}
                {/*   type="email" */}
                {/*   placeholder="lost@space.com" */}
                {/*   required */}
                {/* /> */}
              </div>
            </div>
            <div>
              <button className="btn w-full bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                Join Waitlist
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="flex items-center gap-2 pt-2">
        <Link
          href={`https://github.com/strapexlabs/strapex/stargazers`}
          className="group relative inline-flex items-center gap-2 rounded-full border border-indigo-600/80 bg-indigo-500/15 px-4 py-2 transition-colors before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-indigo-500/5 before:to-violet-500/5 before:opacity-75 hover:bg-indigo-500/20 dark:bg-indigo-500/10 dark:before:from-indigo-500/10 dark:before:to-violet-500/10 dark:hover:bg-indigo-500/15"
        >
          <Icons.star className="z-10 size-4 text-amber-500 transition-all duration-300 ease-in-out group-hover:text-amber-400 group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)] dark:text-amber-400 dark:group-hover:text-amber-300 dark:group-hover:drop-shadow-[0_2px_10px_rgba(251,191,36,0.7)]" />
          <span className="z-10 font-medium text-indigo-700 dark:text-indigo-300">
            {githubStars.toLocaleString()}
          </span>
          <span className="z-10 text-sm text-indigo-600/80 dark:text-indigo-400/80">
            stars on GitHub
          </span>
        </Link>
      </div>

      <div className="flex flex-col items-center gap-2">
        <ul className="mb-4 flex justify-center -space-x-2">
          <li>
            <Image
              className="rounded-full"
              src={Avatar01}
              width={32}
              height={32}
              alt="Avatar 01"
            />
          </li>
          <li>
            <Image
              className="rounded-full"
              src={Avatar02}
              width={32}
              height={32}
              alt="Avatar 02"
            />
          </li>
          <li>
            <Image
              className="rounded-full"
              src={Avatar03}
              width={32}
              height={32}
              alt="Avatar 03"
            />
          </li>
          <li>
            <Image
              className="rounded-full"
              src={Avatar04}
              width={32}
              height={32}
              alt="Avatar 04"
            />
          </li>
          <li>
            <Image
              className="rounded-full"
              src={Avatar05}
              width={32}
              height={32}
              alt="Avatar 05"
            />
          </li>
        </ul>
        <p className="text-sm text-gray-500">
          Join the{" "}
          <span className="font-medium text-gray-700 dark:text-gray-200">
            2,000+
          </span>{" "}
          users who have already signed up.
        </p>
      </div>
    </div>
  );
}
