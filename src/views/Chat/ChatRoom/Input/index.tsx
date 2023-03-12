import { collection, doc, setDoc, Timestamp } from 'firebase/firestore';
import { FormEvent, RefObject } from 'react';

import { SubmitIcon } from '@/components/icons/svg';

import useChatStore from '@/stores/useChatStore';

import { db } from '@/config/firebase';

type TChatInputProps = {
  channelRef: string;
  endChatRef: RefObject<HTMLDivElement>;
};

const ChatInput = ({ channelRef, endChatRef }: TChatInputProps) => {
  const currentUser = useChatStore((state) => state.currentUser);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const ref = doc(collection(db, channelRef));
    await setDoc(ref, {
      message: (e.target as HTMLFormElement).message.value,
      createdBy: currentUser?.uid,
      photoUrl: currentUser?.photoURL,
      name: currentUser?.displayName,
      dateCreation: Timestamp.fromDate(new Date()),
    });
    endChatRef?.current?.scrollIntoView({ behavior: 'smooth' });
    (e.target as HTMLFormElement).message.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mx-4 mb-4 flex h-11 w-auto items-center space-x-1.5 rounded-3xl bg-stone-200 p-3 focus:!border-stone-500 focus:ring-1 focus:ring-stone-500 disabled:cursor-not-allowed'>
        <input
          placeholder='Type a message...'
          name='message'
          className='w-full bg-transparent outline-0 placeholder:text-stone-500'
        />
        <div>
          <button type='submit' className=''>
            <SubmitIcon className='h-8 w-8 text-stone-900 hover:text-sky-900' />
          </button>
        </div>
      </div>
    </form>
  );
};

export default ChatInput;
