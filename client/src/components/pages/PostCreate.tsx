import React, { useState, VFC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@apollo/client";
import Resizer from "react-image-file-resizer";

import { CREATE_NEW_POST, NEW_ARRIVAL_POSTS } from "../../queries/queries";
import { schema } from "../../validations/posts/create";

const PostCreate: VFC = () => {
  const [createNewPost] = useMutation(CREATE_NEW_POST, {
    refetchQueries: [{ query: NEW_ARRIVAL_POSTS }],
    awaitRefetchQueries: true,
  });

  const [deskImageUrl, setDeskImageUrl] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  type FormInputData = {
    title: string;
    description: string;
    userId: number;
  };

  const onSubmit = (data: FormInputData) => {
    createNewPost({
      variables: {
        title: data.title,
        description: data.description,
        deskImage: deskImageUrl,
        userId: data.userId,
      },
    });
  };

  const resizeFile = (file: Blob) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300,
        200,
        "JPEG",
        80,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  const processImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files?.[0];

    if (imageFile !== undefined) {
      if (/image.*/.exec(imageFile.type)) {
        const resizeImage = (await resizeFile(imageFile)) as string;
        setDeskImageUrl(resizeImage);
      }
    }
  };

  return (
    <div className="flex-grow bg-primary">
      <div className="container items-center px-5 pb-8 mx-auto lg:px-24 mt-10">
        <h1 className="text-2xl text-white mb-5">新規投稿</h1>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6 ">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                      >
                        タイトル
                      </label>
                      <div className="mt-1">
                        <input
                          {...register("title")}
                          className="shadow-sm appearance-none border border-gray-300 rounded-md  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="title"
                          type="text"
                        />
                        <span className="text-xs text-red-700">
                          {errors.title?.message}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        デスク写真
                      </label>
                      <div className="flex">
                        <input
                          type="file"
                          name="imageFile"
                          id="imageFile"
                          accept="image/*"
                          onChange={processImage}
                        />
                        {deskImageUrl ? (
                          <img src={deskImageUrl} alt="deskImage" />
                        ) : (
                          <img
                            src="http://placehold.jp/300x200.png"
                            alt="deskImage"
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                      >
                        紹介文
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="description"
                          rows={3}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          {...register("description")}
                        />
                        <span className="text-xs text-red-700">
                          {errors.description?.message}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="tags"
                      className="block text-sm font-medium text-gray-700 mb-5"
                    >
                      タグ
                    </label>
                    <div className="flex">
                      <div>
                        <input
                          type="checkbox"
                          name="option1"
                          id="option1"
                          className="hidden"
                        />
                        <label
                          htmlFor="option1"
                          className="label-checked:bg-gray-300 px-4 py-2 rounded-lg border-solid border-4 border-light-blue-500"
                        >
                          #エンジニア
                        </label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          name="option2"
                          id="option2"
                          className="hidden"
                        />
                        <label
                          htmlFor="option2"
                          className="label-checked:bg-gray-300 px-4 py-2 rounded-lg border-solid border-4 border-light-blue-500 ml-10"
                        >
                          #デザイナー
                        </label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          name="option3"
                          id="option3"
                          className="hidden"
                        />
                        <label
                          htmlFor="option3"
                          className="label-checked:bg-gray-300 px-4 py-2 rounded-lg border-solid border-4 border-light-blue-500 ml-10"
                        >
                          #ゲーマー
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primaryButton hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    投稿
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCreate;
