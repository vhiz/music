import React from "react";
import SectionHeader from "../events/SectionHeader";
import PostList from "../postList/PostList";
import { posts } from "../../data";

export default function Blog() {
  return (
    <section className="section" id="blog">
      <div className="container mx-auto">
        <SectionHeader pretitle={"Our Blog"} title={"Latest News"} />
        <PostList posts={posts} />
      </div>
    </section>
  );
}
