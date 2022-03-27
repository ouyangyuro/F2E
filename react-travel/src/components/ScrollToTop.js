import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// 頁面切換時要用捲軸讓頁面回到最上方
const ScrollToTop = ({ children, location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return children || null;
};

export default withRouter(ScrollToTop);
