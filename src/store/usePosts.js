import { create } from "zustand";
import uuid from 'react-uuid';

export const usePosts = create((set) => ({
  posts: [],
  push: (createId, addPost, authorName) =>
    set((state) => ({
      posts: [
        ...state.posts,
        {
          postId: uuid(),
          createId: createId,
          addPost: addPost,
          authorName: authorName,
          publishTime: new Date().toDateString(),
        },
      ],
    }))
}));