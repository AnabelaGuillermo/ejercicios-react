import { Outlet } from 'react-router-dom';
import Header from '../components/Common/Header.jsx';
import Footer from '../components/Common/Footer.jsx';

const RootView = () => {
  return (
    <>
      <Header />
      <main className='container my-5'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default RootView;
