import type { Metadata } from "next";

import Posts from "@/app/(default)/updates/posts";
import Cta from "@/components/cta";
import PageHeader from "@/components/page-header";
import getAllPosts from "@/lib/getAllPosts";

export const metadata: Metadata = {
  title: "Updates - Creative",
  description: "Page description",
};

export default async function Updates() {
  const postsData: Promise<Post[]> = getAllPosts();
  const posts = await postsData;

  return (
    <>
      <section>
        <div className="pb-12 pt-32 md:pb-20 md:pt-44">
          <div className="px-4 sm:px-6">
            <PageHeader
              title="News & Updates"
              description="Rank and score updates and feature requests so you know you're working on the most impactful things."
            >
              What&apos;s New
            </PageHeader>
          </div>
        </div>
      </section>

      <Posts posts={posts} />
      <Cta />
    </>
  );
}
