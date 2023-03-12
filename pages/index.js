import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "@/components/BlogCard";

const graphcms = new GraphQLClient(
  "https://ap-south-1.cdn.hygraph.com/content/clf439pem4l9701t510c770n7/master"
);

const QUERY = gql`
  {
    posts{
      id,
      title,
      datePublished,
      slug,
      content{
        html
      }
      author{
        name,
        avatar{
          url
        }
      }
      coverPhoto{
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Bloggy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {posts.map((post) => (
          <BlogCard
          id = {post.id}
            props = {{ ...post }}
          />
        ))}
      </main>
    </>
  );
}
