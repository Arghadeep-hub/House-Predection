import { reduxStore } from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={reduxStore}>
      <Component {...pageProps} />
    </Provider>
  );
}
