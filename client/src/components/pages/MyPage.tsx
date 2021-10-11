import React from "react";
import { Link } from "react-router-dom";
import PostCard from "../organisms/PostCard";

const MyPage = () => {
  return (
    <div className="flex-grow">
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-full bg-white shadow-lg transform duration-200 easy-in-out">
          <div className="h-32 overflow-hidden"></div>
          <div className="h-32 flex justify-center px-5  -mt-12">
            <img
              className="h-32 w-32 bg-white p-2 rounded-full   "
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt=""
            />
          </div>
          <div>
            <div className="text-center px-14">
              <Link to="/users/profile/edit/1">
                <h2 className="text-gray-800 text-3xl font-bold">hogehoge</h2>
              </Link>
              <p className="text-gray-400 mt-2">@hogehoge</p>
            </div>
            {/* <hr className="mt-6" /> */}
            <div className="mx-auto w-full sm:w-2/3 flex bg-gray-100 mt-6">
              <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                <p>投稿</p>
              </div>
              <div className="border"></div>
              <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                <p>いいね</p>
              </div>
            </div>
          </div>
          <div>
            <div className="p-6 px-20 flex flex-wrap items-center justify-center">
              <PostCard />
            </div>
            <div className="p-6 px-20 flex flex-wrap items-center justify-center">
              <PostCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
