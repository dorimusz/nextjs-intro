// my-domain.com/news/something-important
import { useRouter } from "next/router"; //special react hook

function DetailPage() {
  const router = useRouter();
  const newsId = router.query.newsId; //holds the value of url
  // send a request to the backend api to fetcj the news item with newsId
  console.log(router.query.newsId);

  return <h1>Hdetauls</h1>;
}

export default DetailPage;
