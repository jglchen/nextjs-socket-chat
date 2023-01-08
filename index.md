---
#
# By default, content added below the "---" mark will appear in the home page
# between the top bar and the list of recent posts.
# To change the home page layout, edit the _layouts/home.html file.
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
#
layout: home
---

There are many ways to achieve real-time content updates on the web. Long-polling, web sockets and server-side events are popular ways for real-time updates. With long-polling an HTTP request is made to the server at a predefined interval. In server-side events, the browser’s event source API is used to open a channel of communication between the client and the server for updates to flow from the server to the client. The web socket protocol opens a two-way communication channel between the client and the server to allow updates to move in both ways.

This real-time chat application is built with **[Next.js](https://nextjs.org/)** using **[Socket.IO](https://nextjs.org/)** for demonstrations.

### Docker: docker run -p 3000:3000 jglchen/nextjs-socket-chat
### [GitHub](https://github.com/jglchen/nextjs-socket-chat)
### back To [Series Home](https://jglchen.github.io/)
