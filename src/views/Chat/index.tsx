import isEmpty from 'lodash/isEmpty';
import { ToastContainer } from 'react-toastify';

import useChatStore from '@/stores/useChatStore';

import Channels from '@/views/Chat/Channels';
import ChatRoom from '@/views/Chat/ChatRoom';
import ChatHeader from '@/views/Chat/Header';

const ChatView = () => {
  const { user } = useChatStore((state) => ({
    user: state.currentUser,
  }));

  return (
    <div className='relative flex h-full max-h-[640px] w-full  max-w-3xl flex-col rounded-xl bg-stone-800'>
      <ChatHeader />
      <div className='flex flex-grow'>
        {!isEmpty(user) && (
          <>
            <Channels />
            <ChatRoom />
          </>
        )}
      </div>
      <ToastContainer
        className='toast--container'
        limit={2}
        position='bottom-right'
      />
    </div>
  );
};

export default ChatView;
