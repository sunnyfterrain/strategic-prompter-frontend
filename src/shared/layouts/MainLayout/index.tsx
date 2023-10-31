import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/shared/components/Header';
import Sidebar from '@/shared/components/Sidebar';
import * as S from '@/shared/layouts/MainLayout/index.style';

const MainLayout = () => {
  return (
    <>
      <Header />
      <S.BoxRow>
        <Sidebar />
        <Outlet />
      </S.BoxRow>
    </>
  );
};

export default MainLayout;
