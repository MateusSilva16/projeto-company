import React from 'react';
import ItemMenu from '../ItemMenu';
import * as S from './styles';
import { FiHome, FiBriefcase, FiUser,FiDollarSign } from 'react-icons/fi';
import { BsClipboardData } from 'react-icons/bs';
import { TbReportMoney } from 'react-icons/tb';
import tokens from '../../../../utils/tokens';

const NavigationMenuDesktop = ({}) => {
  return (
    <S.ContainerNav>
      <S.Containerlogo>
        <TbReportMoney size={30} color={tokens.colors.color4} />
        <S.Title>Project Budget </S.Title>
      </S.Containerlogo>
      <S.UlNav>
        <ItemMenu
          url="/"
          text="Home"
          icon={<FiHome color={tokens.colors.color3} size={18} />}
        />
          <ItemMenu
          url="/projects"
          text="Projetos"
          icon={<FiDollarSign color={tokens.colors.color3} size={18} />}
        />
      {/*   <ItemMenu
          url="/company"
          text="Empresa"
          icon={<FiBriefcase color={tokens.colors.color3} size={18} />}
        />
        <ItemMenu
          url="/contacts"
          text="Contatos"
          icon={<FiUser color={tokens.colors.color3} size={18} />}
        /> */}
      </S.UlNav>
    </S.ContainerNav>
  );
};

export default NavigationMenuDesktop;
