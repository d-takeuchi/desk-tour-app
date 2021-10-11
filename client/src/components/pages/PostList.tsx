import React from "react";
import PostCard from "../organisms/PostCard";

const PostList = () => {
  return (
    <div className="flex-grow container items-center px-5 py-8 mx-auto lg:px-24">
      <h1 className="mx-5">投稿一覧</h1>
      <div className="flex flex-wrap mb-12 text-left">
        <div className="w-full p-6 mx-auto lg:w-1/3">
          <PostCard />
        </div>
        <div className="w-full p-6 mx-auto lg:w-1/3">
          <PostCard />
        </div>
        <div className="w-full p-6 mx-auto lg:w-1/3">
          <PostCard />
        </div>
      </div>
    </div>
  );
};

export default PostList;
