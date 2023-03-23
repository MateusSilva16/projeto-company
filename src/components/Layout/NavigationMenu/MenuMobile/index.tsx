import React, { useState } from 'react';
import ItemMenu from '../ItemMenu';
import * as S from './styles';
import {
  FiHome,
  FiBriefcase,
  FiUser,
  FiDollarSign,
  FiAlignLeft,
  FiX,
} from 'react-icons/fi';

import { TbReportMoney } from 'react-icons/tb';
import tokens from '../../../../utils/tokens';
import { MenuMobileProps } from './types';

const NavigationMenuMobile = ({ close, open, openMenu }: MenuMobileProps) => {
  return (
    <S.ContainerNav>
      <S.ButtonMenu onClick={open}>
        <FiAlignLeft size={40} />
      </S.ButtonMenu>
      <S.MenuHanburguer openMenu={openMenu}>
        <S.ButtonClose onClick={close}>
          <FiX size={35} />
        </S.ButtonClose>
        <S.Containerlogo>
          <TbReportMoney size={30} color={tokens.colors.color4} />
          <S.Title>Project Budget </S.Title>
        </S.Containerlogo>
        <S.UlNav>
          <div onClick={close}>
            <ItemMenu
              url="/"
              text="Home"
              icon={<FiHome color={tokens.colors.color3} size={18} />}
            />
          </div>
          <div onClick={close}>
            <ItemMenu
              url="/projects"
              text="Projetos"
              icon={<FiDollarSign color={tokens.colors.color3} size={18} />}
            />
          </div>
          <div onClick={close}>
            <ItemMenu
              url="/company"
              text="Empresa"
              icon={<FiBriefcase color={tokens.colors.color3} size={18} />}
            />
          </div>
          <div onClick={close}>
            <ItemMenu
              url="/contacts"
              text="Contatos"
              icon={<FiUser color={tokens.colors.color3} size={18} />}
            />
          </div>
        </S.UlNav>
      </S.MenuHanburguer>
      <S.Overlay openMenu={openMenu} onClick={close} />
    </S.ContainerNav>
  );
};

export default NavigationMenuMobile;
