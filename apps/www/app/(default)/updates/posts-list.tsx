"use client";

export default function PostsList({
  posts,
  selectedCategory,
}: {
  posts: Post[];
  selectedCategory: string;
}) {
  const filteredPosts = posts.filter(
    (post) => post.category === selectedCategory,
  );

  return (
    <div className="-my-5 space-y-4 md:grow">
      {filteredPosts.map((post) => {
        return (
          <article
            key={post.id}
            className="group relative py-5 pl-12 pr-4 before:absolute before:inset-y-0 before:left-8 before:right-0 before:-z-10 before:rounded-lg before:bg-gradient-to-tr before:from-white/70 before:to-white/50 before:shadow before:shadow-black/5 even:before:opacity-50 before:dark:bg-gradient-to-b before:dark:from-gray-700/50 before:dark:to-gray-700/40 sm:pl-28 sm:before:left-24"
          >
            {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
            <header className="mb-2 flex flex-col items-start before:absolute before:left-2 before:h-[calc(100%+1rem)] before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-indigo-300/50 before:pl-px after:absolute after:left-2 after:size-2 after:-translate-x-1/2 after:translate-y-2 after:rounded-full after:bg-indigo-400 group-last:before:hidden dark:before:bg-indigo-300/15 sm:flex-row sm:before:left-0 sm:before:ml-[4.5rem] sm:after:left-0 sm:after:ml-[4.5rem]">
              <time className="left-0 mb-3 inline-flex h-6 w-14 items-center justify-center rounded-lg bg-indigo-400 text-xs font-medium text-white sm:absolute sm:mb-0">
                {post.date}
              </time>
              <h2 className="font-inter-tight text-lg font-semibold leading-6 text-gray-800 dark:text-gray-200">
                {post.title}
              </h2>
            </header>
            {/* Content */}
            <div className="mb-4">
              <p className="text-gray-600 dark:text-gray-500">{post.content}</p>
            </div>
            <footer className="flex items-center space-x-3">
              <img
                className="shrink-0 rounded-full"
                src={post.authorImage}
                width={32}
                height={32}
                alt={post.author}
              />
              <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {post.author}
              </div>
            </footer>
          </article>
        );
      })}
    </div>
  );
}
