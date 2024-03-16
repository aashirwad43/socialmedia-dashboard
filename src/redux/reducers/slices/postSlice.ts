import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import Post from "../../../model/Post";
import * as data from "../../../data/posts.json";

type initialStateType = {
  postList: Post[];
};

const postList: Post[] = data.posts;

const initialState: initialStateType = {
  postList,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      const addedPost = [action.payload, ...state.postList];
      return { ...state, postList: addedPost };
    },
    updatePost: (state, action: PayloadAction<Post>) => {
      const {
        payload: { id, name, title, description },
      } = action;

      state.postList = state.postList.map((post) =>
        post.id === id ? { ...post, name, title, description } : post
      );
    },
    removePost: (state, action: PayloadAction<{ id: number }>) => {
      state.postList = state.postList.filter(
        (post) => post.id !== action.payload.id
      );
    },
  },
});

export const { addPost, updatePost, removePost } = postSlice.actions;
export const getPostList = (state: RootState) => state.post.postList;

export default postSlice.reducer;
