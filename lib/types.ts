export interface UserData {
    name: string;
    picture: string;
}

export interface User {
    id: string;
    room: string;
    name: string;
    picture: string;
}

export interface TypingInfo {
    senderId: string;
    user: User;
}

export interface MessageData {
    body: string;
    senderId: string;
    user: UserData;
}

export interface Message {
    id: string;
    room: string;
    body: string;
    senderId: string;
    user: UserData;
    sentAt: number;
    ownedByCurrentUser?: boolean;
}

