// src/pages/SinglePostPage.jsx
import { Link, useParams } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";
import DOMPurify from "dompurify";
import MainCategories from "../components/MainCategories";

const fetchPost = async (slug) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
  return res.data;
};

const SinglePostPage = () => {
  const { slug } = useParams();

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  });

  if (isLoading) return "Loading...";
  if (isError) return <div>Error: {error.message}</div>;
  if (!data) return <div>Post not found!</div>;

  return (
    <div className="flex flex-col gap-8">
      {/* Main Categories */}
      <MainCategories />

      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div className="w-1/2">
          <h1 className="text-blue-800 text-2xl md:text-5xl lg:text-4xl font-bold">
            {data.title}
          </h1>
        </div>
        {/* description */}
        <div className="w-1/2 text-right">
          <div className="flex items-center gap-2 text-gray-400 text-sm justify-end">
            <span>Written by</span>
            <Link className="text-blue-800">{data.user.username}</Link>
            <span>on</span>
            <Link className="text-blue-800">{data.category}</Link>
            <span>{format(data.createdAt)}</span>
          </div>
          <p className="text-gray-500 font-medium">{data.desc}</p>
        </div>
      </div>

      {/* Static Button */}
      <Link to="/write" className="fixed bottom-8 right-6">
        <button className="relative w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="50"
            height="50"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </Link>

      <div className="flex gap-8">
        {/* Left Section */}
        <div className="w-4/5 flex flex-col gap-8">
          {data.img && (
            <div className="mt-4 w-full">
              <Image src={data.img} w="950" className="rounded-2xl" alt=""/>
            </div>
          )}
          <div
            className="lg:text-lg flex flex-col gap-6 text-justify"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.content) }}
          />
        </div>

        {/* Right Section */}
        <div className="w-1/5 px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <Link className="text-white -800 font-semibold">
              {data.user.username}
            </Link>
            <p className="text-sm text-gray-500">
              {data.user.desc}
            </p>
            <div className="flex gap-2 items-center">
              <Link>
                <Image src="f1.svg" />
              </Link>
              <Link>
                <Image src="i1.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions post={data} />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline" to="/posts?cat=General">General</Link>
            <Link className="underline" to="/posts?cat=Space-News">Space News & Updates</Link>
            <Link className="underline" to="/posts?cat=Astronomy-Basics">Astronomy Basics</Link>
            <Link className="underline" to="/posts?cat=Stargazing-Tips">Stargazing Tips</Link>
            <Link className="underline" to="/posts?cat=Cosmic-Events">Cosmic Events</Link>
            <Link className="underline" to="/posts?cat=Space-Photography">Space Photography</Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>

      <Comments postId={data._id} />
    </div>
  );
};

export default SinglePostPage;
