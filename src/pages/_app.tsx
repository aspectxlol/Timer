import { type AppType } from "next/app";
import '@Timer/styles/globals.css'
import 'react-toastify/dist/ReactToastify.min.css';

import { api } from "@Timer/utils/api";
import { ToastContainer } from "react-toastify";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`font-mono`}>
      <ToastContainer position="top-right" theme="dark" autoClose={2000} />
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);
