import { collection, FirestoreDataConverter, query } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { db } from '@/config/firebase';
import { IChannel } from '@/utils/types';
import Channel from '@/views/Chat/Channels/Channel';

const converter: FirestoreDataConverter<unknown> = {
  toFirestore: (data) => data,
  fromFirestore: (snap) => ({
    id: snap?.id,
    ...snap.data(),
  }),
};

const Channels = () => {
  const q = query(
    collection(db, 'channel')
    // where('members', 'array-contains', 'jim')
  );
  const [channels] = useCollectionData(q.withConverter(converter));

  // const getChannels = async () => {
  //   const querySnapshot = await getDocs(collection(db, 'channel'));
  //   console.log(querySnapshot);
  // };

  // useEffect(() => {
  //   getChannels();
  // }, []);
  return (
    <div className='bordered my-2 flex w-full max-w-[230px] flex-col flex-nowrap gap-y-2 border-r-[1px] border-stone-600'>
      {channels?.map((channel) => (
        <Channel key={channel.id} {...(channel as IChannel)} />
      ))}
    </div>
  );
};

export default Channels;
