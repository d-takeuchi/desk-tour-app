import { gql } from "@apollo/client";
import { Post } from "../types";

//新着3件の投稿取得
export const NEW_ARRIVAL_POSTS = gql`
  {
    getNewArrivalPosts {
      title
      deskImage
    }
  }
`;

//新規投稿
export const CREATE_NEW_POST = gql`
  mutation ($title: String!, $description: String!, $deskImage: String!) {
    addNewPost(
      newPostData: {
        title: $title
        description: $description
        deskImage: $deskImage
      }
    ) {
      title
    }
  }
`;

//ユーザー登録（通常登録）
export const CREATE_NEW_USER = gql`
  mutation ($name: String!, $email: String!, $password: String!) {
    signUp(newUserData: { name: $name, email: $email, password: $password }) {
      id
      name
    }
  }
`;
