import '../public/css/style.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ToastContainer position='top-center' />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
