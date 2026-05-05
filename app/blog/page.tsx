import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonial";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Notes · Josephine Tutoring",
  description:
    "Thoughts on patience, attention, and how students grow.",
};

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <>
      <Nav />
      <main id="main-content" className="blog-wrap">
        <div className="blog-inner">
          <div className="section-eyebrow">Notes &amp; guides</div>
          <h1 className="section-title">
            From the <em>journal</em>.
          </h1>
          <p className="blog-subhead">
            Quiet notes on patience, attention, and how students grow.
          </p>
          {posts.length === 0 ? (
            <p className="blog-empty">The first note is on the way.</p>
          ) : (
            <ul className="post-list">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="post-link">
                    <time>{formatDate(post.date)}</time>
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <Testimonial ids={["identity"]} />
      <Footer />
    </>
  );
}

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
