import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import useChatStore from '@/stores/useChatStore';

import { getNameInitials } from '@/utils/string';

type TMessageProps = {
  message?: string;
  dateCreation: any;
  createdBy: string;
  key: string;
  photoUrl: string;
  name: string;
};

const Message = ({
  message = '',
  dateCreation,
  createdBy,
  photoUrl,
  name,
}: TMessageProps) => {
  const { currentUser } = useChatStore((state) => ({
    currentUser: state.currentUser,
    channel: state?.channel,
  }));

  return (
    <div
      key={message}
      className={twMerge(
        'flex items-center gap-x-2',
        currentUser?.uid === createdBy && 'justify-end',
        currentUser?.uid !== createdBy && 'justify-start'
      )}
    >
      {currentUser?.uid !== createdBy && (
        <span
          title={name}
          className={twMerge(
            'h-10 w-10 overflow-hidden rounded-full text-stone-200'
          )}
        >
          {photoUrl ? (
            <Image src={photoUrl} alt='' height={40} width={40} />
          ) : (
            getNameInitials(name)
          )}
        </span>
      )}
      <span
        title={
          dateCreation ? new Date(dateCreation?.toDate()).toLocaleString() : ''
        }
        className={twMerge(
          'w-max max-w-[330px] rounded-2xl bg-stone-600 py-2 px-4 text-stone-200'
        )}
      >
        {message}
      </span>
    </div>
  );
};

export default Message;
