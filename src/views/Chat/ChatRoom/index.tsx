import RoomHeader from '@/views/Chat/ChatRoom/RoomHeader';

const ChatRoom = () => {
  // const [value] = useCollectionData(
  //   collection(db, 'channel/WX3DYawP5GB7b7jTnzp8/messages')
  // );
  return (
    <div className='flex h-full w-full'>
      <RoomHeader />
    </div>
  );
};

export default ChatRoom;
