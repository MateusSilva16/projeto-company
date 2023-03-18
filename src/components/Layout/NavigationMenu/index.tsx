import React from 'react';
import ItemMenu from './ItemMenu';
import * as S from './styles';
import { FiHome, FiBriefcase, FiUser, FiDollarSign } from 'react-icons/fi';
import { TbReportMoney } from 'react-icons/tb';
import tokens from '../../../utils/tokens';

const NavigationMenu = ({}) => {
  return (
    <S.ContainerNav>
      <S.Containerlogo>
        <TbReportMoney size={30} color={tokens.colors.color4}/>
      </S.Containerlogo>
      <S.UlNav>
        <ItemMenu
          url="/"
          text="Home"
          icon={<FiHome color={tokens.colors.color3} size={18} />}
        />
        <ItemMenu
          url="/company"
          text="Empresa"
          icon={<FiBriefcase color={tokens.colors.color3} size={18} />}
        />
        <ItemMenu
          url="/contacts"
          text="Contatos"
          icon={<FiUser color={tokens.colors.color3} size={18} />}
        />
        <ItemMenu
          url="/newProject"
          text="Novo Projecto"
          icon={<FiDollarSign color={tokens.colors.color3} size={18} />}
        />
      </S.UlNav>
    </S.ContainerNav>
  );
};

export default NavigationMenu;
