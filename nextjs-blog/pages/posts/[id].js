import utilStyles from "../../styles/utils.module.css";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/post";
import Head from "next/head";
import Date from "../../components/date";

//FETCHES NECESSARY DATA
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

//RETURNS AN ARRAY OF POSSIBLE VALUES FOR ID
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths, // contains the array of known paths returned by getAllPostIds(), which include the params defined by pages/posts/[id].js
    fallback: false,
  };
}

//REACT COMPONENT TO RENDER THE PAGE
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          {/* {postData.id} */}
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
