import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <nav>Nav Bar</nav>
      <Component {...pageProps} />;
    </div>
  );
}
