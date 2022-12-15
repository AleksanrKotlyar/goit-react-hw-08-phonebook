import { Outlet } from 'react-router-dom';

import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { WrapSpinner } from './PhoneBook/PhoneBook.styled';
import { Circles } from 'react-loader-spinner';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense
        fallback={
          <WrapSpinner>
            <Circles
              height="80"
              width="80"
              color="#9aec3d4d"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </WrapSpinner>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};
