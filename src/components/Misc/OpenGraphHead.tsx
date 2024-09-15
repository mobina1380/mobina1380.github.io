import Head from 'next/head';
const OpenGraphHead = () => (
  <Head>
    <title>KL Lawingco | Software Engineer</title>
    <meta content="My personal solace place on web-earth." name="description" />
    <meta content="KL Lawingco | Software Engineer" property="og:title" />
    <meta content="Marc Jhon Lawingco" property="og:site_name" />
    <meta content="https://kllawingco.netlify.app/" property="og:url" />
    <meta
      content="Ohh you found me?. Howdy! I am Marc Jhon Lawingco. Or you could call me KL. That works too . . . I am a Software Engineer"
      property="og:description"
    />
    <meta content="profile" property="og:type" />
    <meta content="https://kllawingco.netlify.app/KL_avatar.png" property="og:image"></meta>
  </Head>
);
export default OpenGraphHead;
