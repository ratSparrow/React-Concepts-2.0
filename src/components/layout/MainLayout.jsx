import Footer from '../shared/Footer';
import Header from '../shared/Header';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.children,
};
