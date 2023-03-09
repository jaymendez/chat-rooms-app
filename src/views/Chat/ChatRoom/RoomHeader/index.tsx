import useChatStore from '@/stores/useChatStore';

const RoomHeader = () => {
  const channel = useChatStore((state) => state?.channel);

  return (
    <div className='flex max-h-11 w-full items-center justify-between border-b-[1px] border-stone-600 px-2'>
      <div className='text-white'>{channel?.name}</div>
      <div></div>
    </div>
  );
};

export default RoomHeader;
