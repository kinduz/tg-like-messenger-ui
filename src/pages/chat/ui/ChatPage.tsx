import { useParams } from 'react-router-dom';
import { Placeholder } from '@telegram-apps/telegram-ui';
import { Flex } from '@/shared';

const ChatPage = () => {
  const { chatId } = useParams();
  return (
    <Flex style={{ height: '100%' }} align="center" justify="center">
      <Placeholder
        header={`Пользователь с id ${chatId}`}
        description="Напишите что-нибудь, он будет рад вашему сообщению!"
      >
        <img
          width={192}
          alt="Telegram sticker"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/00905985795597.5d8686a10a8be.gif"
        />
      </Placeholder>
    </Flex>
  );
};

export default ChatPage;
