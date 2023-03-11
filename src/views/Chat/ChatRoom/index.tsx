import { useMemo, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

import useChatStore from '@/stores/useChatStore';

import Conversation from '@/views/Chat/ChatRoom/Conversation';
import ChatInput from '@/views/Chat/ChatRoom/Input';
import JoinChannel from '@/views/Chat/ChatRoom/JoinChannel';
import RoomHeader from '@/views/Chat/ChatRoom/RoomHeader';

const ChatRoom = () => {
  const endChatRef = useRef<HTMLDivElement>(null);
  const { channel, currentUser } = useChatStore((state) => ({
    currentUser: state.currentUser,
    channel: state?.channel,
  }));

  const doesUserBelong = useMemo(
    () => channel?.members.includes(currentUser?.uid as never) || false,
    [channel, currentUser]
  );

  const channelMessageSource = `channels/${channel?.id}/messages`;

  return (
    <div className={twMerge('flex h-full w-full flex-col gap-y-4')}>
      <RoomHeader doesUserBelong={doesUserBelong} />
      {doesUserBelong ? (
        channel?.id && (
          <>
            <Conversation
              channelSource={channelMessageSource}
              endChat={<div ref={endChatRef} />}
              doesUserBelong={doesUserBelong}
            />
            <ChatInput
              channelRef={channelMessageSource}
              endChatRef={endChatRef}
            />
          </>
        )
      ) : (
        <JoinChannel />
      )}
    </div>
  );
};

export default ChatRoom;
