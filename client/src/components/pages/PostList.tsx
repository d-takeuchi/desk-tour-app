import React from "react";
import PostCard from "../organisms/PostCard";

const PostList = () => {
  return (
    <div className="container items-center px-5 py-8 mx-auto lg:px-24">
      <h1 className="mx-5">投稿一覧</h1>
      <div className="flex flex-wrap mb-12 text-left">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default PostList;
