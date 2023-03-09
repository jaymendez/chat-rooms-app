import Channels from '@/views/Chat/Channels';
import ChatRoom from '@/views/Chat/ChatRoom';
import ChatHeader from '@/views/Chat/Header';

const ChatView = () => {
  return (
    <div className='flex h-full max-h-[640px] w-full  max-w-3xl flex-col rounded-xl bg-stone-800'>
      <ChatHeader />
      <div className='flex flex-grow'>
        <Channels />
        <ChatRoom />
      </div>
    </div>
  );
};

export default ChatView;
