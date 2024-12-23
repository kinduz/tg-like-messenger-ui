import { Avatar } from '@telegram-apps/telegram-ui';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { IoMdSearch } from 'react-icons/io';
import { t } from 'i18next';
import { Cell, Input } from '@/shared';
import { SidebarLayout } from './Sidebar.styled';

export const Sidebar = () => {
  const array = Array.from({ length: 20 }, (e, i) => i + 1);
  return (
    <SidebarLayout vertical>
      <Input placeholder={t('common.placeholders.search')} after={<IoMdSearch size={'20px'} />} />
      {array.map((_, index) => (
        <NavLink key={index} to={`/chat/${index}`}>
          <Cell
            before={<Avatar size={48} />}
            subtitle={`Сообщение от человека с номером ${index + 20}`}
          >
            Марк
          </Cell>
        </NavLink>
      ))}
    </SidebarLayout>
  );
};
