import { collection, FirestoreDataConverter, query } from 'firebase/firestore';
import { useEffect } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { twMerge } from 'tailwind-merge';

import useChatStore from '@/stores/useChatStore';

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
  const { setActiveChannel, channel } = useChatStore((state) => ({
    setActiveChannel: state.setActiveChannel,
    channel: state.channel,
  }));

  const q = query(collection(db, 'channels'));
  const [channels] = useCollectionData(q.withConverter(converter));

  useEffect(() => {
    // Update state of active channel on change of channels
    if (channel) {
      const activeChannel = channels?.find((item) => item?.id === channel.id);
      setActiveChannel(activeChannel as IChannel);
    }
  }, [channels, channel, setActiveChannel]);

  return (
    <div
      className={twMerge(
        'bordered my-2 flex w-max max-w-[230px] flex-col flex-nowrap gap-y-2 border-r-[1px] border-stone-600 sm:w-full'
      )}
    >
      {channels?.map((channel) => (
        <Channel key={channel.id} {...(channel as IChannel)} />
      ))}
    </div>
  );
};

export default Channels;
