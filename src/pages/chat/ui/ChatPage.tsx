import { useParams } from 'react-router-dom';

const ChatPage = () => {
  const { chatId } = useParams();
  return <>{chatId}</>;
};

export default ChatPage;
