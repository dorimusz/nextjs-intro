// http://localhost:3000/posts
import Link from "next/link";

export default function Post() {
  return (
    <>
      <h1>Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
