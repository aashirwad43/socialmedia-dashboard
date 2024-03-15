import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import Post from "../../../model/Post";
import { v4 as uuidv4 } from "uuid";

type initialStateType = {
  postList: Post[];
};

const postList: Post[] = [
  {
    id: uuidv4(),
    name: "Roger",
    title: "Random",
    post: "This is a random post",
  },
];

const initialState: initialStateType = {
  postList,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.postList.push(action.payload);
    },
    // updatePost: (state, action: PayloadAction<Post>) => {
    //   const {
    //     payload: { id, name, title, post },
    //   } = action;

    //   state.postList = state.postList.map((post) =>
    //     post.id === id ? { ...post, name, title, post } : post
    //   );
    // },
    removePost: (state, action: PayloadAction<{ id: string }>) => {
      state.postList = state.postList.filter(
        (post) => post.id !== action.payload.id
      );
    },
  },
});

// export const { addPost, updatePost, removePost } = postSlice.actions;
export const { addPost, removePost } = postSlice.actions;
export const getPostList = (state: RootState) => state.post.postList;

export default postSlice.reducer;
