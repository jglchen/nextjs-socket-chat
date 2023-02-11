import Head from 'next/head';

export default function Layout({ children}: {children: JSX.Element}) {
    return (
        <>
           <Head>
             <title>Chat Applications with Socket.IO</title>
             <link rel="icon" href="/favicon.ico" />
             <meta
              name="description"
              content="A real-time chat application with Socket.IO"
              />
             <meta name="og:title" content="Chat Applications with Socket.IO" />
             <meta
              property="og:description"
              content="A real-time chat application with Socket.IO"
              />
           </Head>
           <main>
              {children}
           </main>   
        </>
    );
}


