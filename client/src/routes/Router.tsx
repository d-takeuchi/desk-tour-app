import React, { VFC } from "react";
import { Route, Switch } from "react-router";
import PostCard from "../components/organisms/PostCard";
import EditProfile from "../components/pages/EditProfile";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import MyPage from "../components/pages/MyPage";
import Page404 from "../components/pages/Page404";
import PostCreate from "../components/pages/PostCreate";
import PostList from "../components/pages/PostList";
import SignUp from "../components/pages/SignUp";

export const Router: VFC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/sign-up">
        <SignUp />
      </Route>
      <Route exact path="/posts">
        <PostList />
      </Route>
      <Route path="/posts/create">
        <PostCreate />
      </Route>
      <Route exact path="/users/profile/:id">
        <MyPage />
      </Route>
      <Route exact path="/users/profile/edit/:id">
        <EditProfile />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
