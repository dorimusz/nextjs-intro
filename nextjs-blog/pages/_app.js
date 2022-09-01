// App component is top-level, will be common across all diff pages
// App component can be used to keep state when navigating between pages
// after adding _app.js, dev server must be stopped

import "../styles/globals.css";
// global CSS can be imported only in this file

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
