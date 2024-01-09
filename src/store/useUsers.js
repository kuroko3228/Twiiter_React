import { create } from "zustand";

export const useUsers = create((set) => ({
   users: [],
   push: (name, login, password) =>
      set((state) => ({
         users: [
            ...state.users,
            {
               userId: 1,
               name: name,
               login: login,
               password: password,
               dateOfLogUp: new Date().toDateString()
            },
         ],
      })),
}));
