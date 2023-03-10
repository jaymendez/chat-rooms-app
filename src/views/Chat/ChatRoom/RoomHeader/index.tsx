import useChatStore from '@/stores/useChatStore';

import LeaveChannel from '@/views/Chat/ChatRoom/RoomHeader/LeaveChannel';

const RoomHeader = ({ doesUserBelong }: { doesUserBelong: boolean }) => {
  const channel = useChatStore((state) => state?.channel);

  return (
    <div className='flex max-h-11 w-auto items-center justify-between border-b-[1px] border-stone-600 px-4 py-6 text-xl tracking-tighter'>
      <div className='text-stone-200'>{channel?.name}</div>
      <div>{doesUserBelong && <LeaveChannel />}</div>
    </div>
  );
};

export default RoomHeader;
