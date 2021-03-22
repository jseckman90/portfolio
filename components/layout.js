import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Josh Seckman Portfolio" />
        <meta
          name="title"
          property="og:title"
          content="Josh Seckman Portfolio"
        />
        <meta property="og:type" content="_" />
        <meta
          name="image"
          property="og:image"
          content="https://i.imgur.com/sFHAfmG.png"
        />
        <meta
          name="description"
          property="og:description"
          content="Josh Seckman Portfolio"
        />
        <meta name="author" content="Josh Seckman" />
        <title>Josh Seckman | Full Stack Software Engineer</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"></link>

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossorigin="anonymous"></script>
      </Head>
      <Header />
      <main className="layout">{children} </main>
      <Footer />
    </>
  );
}
