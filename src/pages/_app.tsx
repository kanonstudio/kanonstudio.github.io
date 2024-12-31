import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "react-photo-album/styles.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "github-markdown-css/github-markdown.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  // Ensure Bootstrap JavaScript is loaded on the client side
  //const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    import("bootstrap");
    //setDomLoaded(true);
  }, []);

  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
