import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
export default function PostList({ posts }) {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="flex flex-col items-center"
    >
      <div className="flex flex-col xl:flex-row justify-between gap-12 py-10 xl:pt-16 xl:pb-24 border-t border-white/10">
        {posts.slice(0, 3).map((post, i) => (
          <motion.div
            variants={fadeIn("up", i * 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 capitalize"
            key={i}
          >
            <div className="text-accent font-bold mb-1">{post.date}</div>
            <div className="text-xl font-medium mb-4">{post.title}</div>
            <p className="text-white/30 mb-6 font-light">{post.desc}...</p>
            <a href="#" className="flex items-center gap-x-2 group">
              Read More
              <BsArrowRight className="text-xl group-hover:ml-1 transition-all" />
            </a>
          </motion.div>
        ))}
      </div>
      <button className="btn btn-lg btn-accent">View All Posts</button>
    </motion.div>
  );
}
