import { collection, orderBy, query } from 'firebase/firestore';
import { ReactElement } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { db } from '@/config/firebase';
import Message from '@/views/Chat/ChatRoom/Conversation/Message';

type TConversationProps = {
  endChat: ReactElement;
  channelSource: string;
};

const Conversation = ({ endChat, channelSource }: TConversationProps) => {
  const channelRef = collection(db, channelSource);
  const q = query(channelRef, orderBy('dateCreation', 'asc'));
  const [messages] = useCollectionData(q);
  console.log(messages);
  return (
    <div className='mx-4 flex max-h-[460px] flex-grow flex-col gap-y-2'>
      <div className='flex flex-grow flex-col gap-y-2 overflow-y-auto pr-4 scrollbar-thin scrollbar-track-stone-300 scrollbar-thumb-stone-900'>
        {messages?.map(
          ({ message, dateCreation, createdBy, photoUrl, name }) => (
            <Message
              message={message}
              dateCreation={dateCreation}
              createdBy={createdBy}
              photoUrl={photoUrl}
              key={message as string}
              name={name}
            />
          )
        )}
        {endChat}
      </div>
    </div>
  );
};

export default Conversation;
