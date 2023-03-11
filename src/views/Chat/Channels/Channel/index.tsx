import { useMedia } from 'react-use';
import { twMerge } from 'tailwind-merge';

import useChatStore from '@/stores/useChatStore';

import { getNameInitials } from '@/utils/string';
import { IChannel } from '@/utils/types';

type TChannelProps = IChannel & {
  key: string;
};

const Channel = ({ id, name, members, key }: TChannelProps) => {
  const setActiveChannel = useChatStore((state) => state.setActiveChannel);
  const isMobile = useMedia('(max-width: 640px)');

  return (
    <div
      className={twMerge(
        'mx-2 flex cursor-pointer flex-col px-2 py-3 text-white hover:bg-stone-600 sm:h-auto sm:w-auto sm:items-start sm:justify-start sm:rounded-md sm:bg-stone-700',
        'h-10 w-10 items-center justify-center rounded-full bg-red-400'
      )}
      key={key}
      onClick={() => setActiveChannel({ id, name, members })}
    >
      <>
        {isMobile ? (
          <div className=''>{getNameInitials(name)}</div>
        ) : (
          <div className='flex flex-row items-center gap-x-3'>
            <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-400'>
              {getNameInitials(name)}
            </div>
            <div className=''>{name}</div>
            {/* <div>{members}</div> */}
          </div>
        )}
      </>
    </div>
  );
};

export default Channel;
