import React, { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';

type ICenteredFooterProps = {
  iconList: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <>
    <div className="flex flex-wrap mx-auto container items-center justify-center">
      <div className="items-center justify-center w-1/3">
        <img
          className="w-full"
          src="assets/images/logo.svg"
          alt="Gatitolabs Logo"
        ></img>
        <div className="text-start">
          <p className="mt-5"> Arauco 340, Chillán</p>
          <p className="mt-5"> Gatitolabs SpA</p>
          <p className="mt-5"> contacto@gatitolabs.cl </p>

          <div className="mt-5 flex justify-start">
            <FooterIconList>{props.iconList}</FooterIconList>
          </div>
        </div>
      </div>
      <div className="flex w-1/3 align-center justify-end">
        <img
          className="w-full"
          src="assets/images/logo-corfo-footer.png"
          alt="Gatitolabs Logo"
        ></img>
      </div>
      <div className="mt-8 text-sm justify-center">
        <FooterCopyright />
      </div>
    </div>
  </>
);

export { CenteredFooter };
