import { Link } from "react-router-dom";
import Image from "./Image";
import { format } from "timeago.js";

const PostListItem = ({ post = {} }) => {
  const user = post.user || { username: "Unknown" };

  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      {/* image */}
      {post.img && (
        <div className="md:hidden xl:block xl:w-1/3">
          <Image 
            src={post.img} 
            alt={post.title || "Post image"} 
            className="rounded-2xl object-cover" 
            w="735" 
          />
        </div>
      )}
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link 
          to={`/${post.slug}`} 
          className="text-4xl font-semibold hover:text-blue-800 transition-colors duration-300"
        >
          {post.title || "Untitled Post"}
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800 hover:underline" to={`/posts?author=${user.username}`}>
            {user.username}
          </Link>
          <span>on</span>
          <Link 
            to={`/posts?category=${post.category || "Uncategorized"}`} 
            className="text-blue-800 hover:underline"
          >
            {post.category || "Uncategorized"}
          </Link>
          <span>{post.createdAt ? format(post.createdAt) : "Unknown date"}</span>
        </div>
        <p>{post.desc || "No description available."}</p>
        <Link 
          to={`/${post.slug}`} 
          className="underline text-blue-800 text-sm hover:text-blue-600"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
