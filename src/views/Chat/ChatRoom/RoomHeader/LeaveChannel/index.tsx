import { arrayRemove, doc, updateDoc } from 'firebase/firestore';

import useChatStore from '@/stores/useChatStore';

import { db } from '@/config/firebase';

const LeaveChannel = () => {
  const { channel, currentUser } = useChatStore((state) => ({
    currentUser: state.currentUser,
    channel: state?.channel,
  }));

  const handleClick = async () => {
    const ref = doc(db, `/channels/${channel?.id}`);
    if (currentUser?.uid) {
      await updateDoc(ref, {
        ...channel,
        members: arrayRemove(currentUser.uid),
      });
    }
  };

  return (
    <button
      className='rounded-md bg-red-600 py-1 px-2 text-sm text-stone-200'
      onClick={handleClick}
    >
      Leave Channel
    </button>
  );
};

export default LeaveChannel;
