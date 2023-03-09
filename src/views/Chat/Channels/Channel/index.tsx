import useChatStore from '@/stores/useChatStore';

import { IChannel } from '@/utils/types';

type TChannelProps = IChannel & {
  key: string;
};

const Channel = ({ id, name, members, key }: TChannelProps) => {
  const setActiveChannel = useChatStore((state) => state.setActiveChannel);

  return (
    <div
      className='mx-2 flex cursor-pointer flex-col rounded-md bg-stone-700 px-2 py-4 text-white hover:bg-stone-600'
      key={key}
      onClick={() => setActiveChannel({ id, name, members })}
    >
      <div>{name}</div>
      <div>{members}</div>
    </div>
  );
};

export default Channel;
