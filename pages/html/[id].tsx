import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import axios from 'axios';

import colors from '../../utils/colors';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps = async () => {
  let quote = {
    content: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  };

  try {
    const res = await axios.get('https://api.quotable.io/random', { timeout: 5000 });
    quote = {
      content: res.data.content,
      author: res.data.author,
    };
  } catch (error) {
    console.error('Failed to fetch quote from api.quotable.io, using fallback.', error.message);
  }

  const color = colors[Math.floor(Math.random() * colors.length)];

  return {
    props: {
      quote,
      color,
    },
    revalidate: 31536000,
  };
};

interface HomeProps {
  quote: {
    content: string;
    author: string;
  };
  color: {
    background: string;
    color: string;
  };
}

export default function Home(props: HomeProps) {
  return (
    <>
      <Head>
        <title>Image generator</title>
      </Head>

      <div
        id="wrapper"
        style={{
          backgroundColor: props.color.background,
          color: props.color.color,
        }}
      >
        <div id="content">
          <p>{props.quote.content}</p>
          <span>- {props.quote.author}</span>
        </div>
      </div>
    </>
  );
}
