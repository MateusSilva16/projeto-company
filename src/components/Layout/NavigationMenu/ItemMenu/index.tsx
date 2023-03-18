import React from 'react';
import { Link } from 'react-router-dom';
import { LiItem, ContainerText } from './styles';

interface ItemMenuProps {
  url: string;
  text?: string;
  icon?: React.ReactNode;
}

const ItemMenu = ({ url = '/', text, icon }: ItemMenuProps) => {
  return (
    <Link to={url}>
      <LiItem>
        {icon}
        <ContainerText>{text}</ContainerText>
      </LiItem>
    </Link>
  );
};

export default ItemMenu;
