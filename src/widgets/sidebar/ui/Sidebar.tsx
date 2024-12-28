import { Avatar, IconButton } from '@telegram-apps/telegram-ui';
import { NavLink } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io';
import { t } from 'i18next';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ChatCell, Input } from '@/shared';
import { SearchBlockStyled, SidebarLayout } from './Sidebar.styled';

export const Sidebar = () => {
  const array = Array.from({ length: 20 }, (e, i) => i + 1);
  return (
    <SidebarLayout align="start" vertical>
      <SearchBlockStyled align="center">
        <IconButton mode="outline" size="l">
          <GiHamburgerMenu size="20px" />
        </IconButton>
        <Input placeholder={t('common.placeholders.search')} after={<IoMdSearch size={'20px'} />} />
      </SearchBlockStyled>
      {array.map((_, index) => (
        <NavLink key={index} to={`/chat/${index}`}>
          <ChatCell
            before={<Avatar size={48} />}
            subtitle={`Сообщение от человека с номером ${index + 20}`}
            chatName="Марк"
          />
        </NavLink>
      ))}
    </SidebarLayout>
  );
};
