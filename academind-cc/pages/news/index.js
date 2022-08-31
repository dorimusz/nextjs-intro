// my-domain.com/news

import { Fragment } from "react";
import Link from "next/link"; //to stay single paged  in order to preserve states

function NewsPage() {
  return (
    <Fragment>
      <h1>Hello girl, news</h1>
      <ul>
        <li>
          <Link href="/news">Its great</Link>
        </li>
        <li>
          <Link href="/news/wunderbar">Wunderbar</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
