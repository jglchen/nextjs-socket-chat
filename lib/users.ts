import { User } from "./types";

const users: User[] = [];

export const addUser = (id: string, room: string, name: string, picture: string) => {
  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );

  if (!name || !room) return { error: "Username and room are required." };
  if (existingUser) return { error: "Username is taken." };

  const user = { id, name, picture, room };

  users.push(user);

  return { id, name: user.name, picture: user.picture };
};

export const removeUser = (id: string) => {
    const index = users.findIndex((user) => user.id === id);
  
    if (index !== -1) return users.splice(index, 1)[0];
};
  
export const getUser = (id: string) => users.find((user) => user.id === id);
  
export const getUsersInRoom = (room: string) => users.filter((user) => user.room === room);
  
  