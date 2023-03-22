import * as S from './styles';
import React, { useState, useEffect } from 'react';

const Message = ({ typeSucess, msg }: any) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!msg) {
      setVisible(false);
      return;
    }

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [msg]);

  return <>{visible && <S.Container types={typeSucess}>{msg}</S.Container>}</>;
};

export default Message;
