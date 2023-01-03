import { v4 as uuidv4 } from 'uuid';
import { Message, MessageData } from "./types";

const messages: Message[] = [];

export const addMessage = (room: string, message: MessageData) => {
  const msg = { id: uuidv4(), room, ...message, sentAt: Date.now() };
  messages.push(msg);
  return msg;
};

export const removeMessage = (id: string) => {
  const index = messages.findIndex((message) => message.id === id);

  if (index !== -1) return messages.splice(index, 1)[0];
};

export const getMessage = (id: string) => messages.find((message) => message.id === id);

export const getMessagesInRoom = (room: string) =>
  messages.filter((message) => message.room === room);

