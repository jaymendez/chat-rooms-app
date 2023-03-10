import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

import useChatStore from '@/stores/useChatStore';

import { db } from '@/config/firebase';

const JoinChannel = () => {
  const { channel, currentUser } = useChatStore((state) => ({
    currentUser: state.currentUser,
    channel: state?.channel,
  }));

  const handleClick = async () => {
    const ref = doc(db, `/channel/${channel?.id}`);
    if (currentUser?.uid) {
      await updateDoc(ref, {
        ...channel,
        members: arrayUnion(currentUser.uid),
      });
    }
  };

  return (
    <div className='flex h-full items-center justify-center'>
      <button
        className='rounded-lg bg-sky-700 p-2 text-xl tracking-widest text-stone-200'
        onClick={handleClick}
      >
        Join Channel
      </button>
    </div>
  );
};

export default JoinChannel;
