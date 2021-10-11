import React from "react";
import PostCard from "../organisms/PostCard";

const Home = () => {
  return (
    <>
      {/* メインビジュアル */}
      <div className="bg-hero-img bg-cover bg-no-repeat bg-center relative overflow-hidden min-h-screen">
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
          <div className="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
            <h1 className="font-bold text-3xl sm:text-6xl text-white leading-tight mt-4">
              お気に入りのデスク環境を見つけてみませんか？
            </h1>
            <a
              href="/"
              className="block bg-white hover:bg-gray-100 py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-10"
            >
              あなたのデスク環境を投稿
            </a>
          </div>
        </div>
      </div>

      {/* 投稿の新着 */}
      <section className="text-blueGray-900 ">
        <div className="container items-center px-5 py-8 mx-auto lg:px-24">
          <div className="flex justify-between">
            <h2 className="font-medium">新着</h2>
            <button className="bg-gray-200 rounded-xl py-2 px-8">
              すべて見る
            </button>
          </div>

          <div className="flex flex-wrap mb-12 text-left">
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
