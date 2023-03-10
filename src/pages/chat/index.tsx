import 'firebase/auth';
import 'firebase/firestore';

import ChatView from '@/views/Chat';

const ChatRoomsApp = () => {
  return (
    <div className='align-items relative flex h-full items-center justify-center px-4'>
      <header></header>
      <ChatView />
    </div>
  );
};

export default ChatRoomsApp;
