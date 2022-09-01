import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/post";
// getStaticProps() can only be exported from a page, can’t export it from non-page files.

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My dummy intro </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}> </Link>
              <a>{title}</a>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

/*
// to use server-side rendering, export getServerSideProprs instead getStaticProps. Context contains request specific parameters
export async function getServerSideProps(context) {
  return {
    props: {
      //props for component
    }
  }
}
*/

/*
  //fetching data from external API
  const allPostsData = await getSortedPostsData();
  const fullPostData = JSON.stringify(allPostsData);
  console.log("@@ALLPOSTS", fullPostData);
  return {
    props: {
      fullPostData,
    },
  };
  */
