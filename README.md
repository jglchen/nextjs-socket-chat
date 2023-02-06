# Chat Applications with Socket.IO

There are many ways to achieve real-time content updates on the web. Long-polling, web sockets and server-side events are popular ways for real-time updates. With long-polling an HTTP request is made to the server at a predefined interval. In server-side events, the browser’s event source API is used to open a channel of communication between the client and the server for updates to flow from the server to the client. The web socket protocol opens a two-way communication channel between the client and the server to allow updates to move in both ways.

This real-time chat application is built with **[Next.js](https://nextjs.org/)** using **[Socket.IO](https://socket.io/)** for demonstrations.


### Docker: docker run -p 3000:3000 jglchen/nextjs-socket-chat
### [GitHub](https://github.com/jglchen/nextjs-socket-chat)
