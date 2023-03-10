import { User } from 'firebase/auth';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { IChannel } from '@/utils/types';

interface IChatStore {
  channel?: IChannel;
  setActiveChannel: (channel: IChannel) => void;
  setCurrentUser: (user: User) => void;
  currentUser?: User;
}

const initialState = {
  channel: {
    id: '',
    name: '',
    members: [],
  },
};

let store = (set): IChatStore => ({
  ...initialState,
  setActiveChannel: (channel) => set({ channel }),
  setCurrentUser: (user) => set({ currentUser: user }),
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
store = devtools(store);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
store = persist(store, { name: 'chatStore' });

const useChatStore = create<IChatStore>(store);

export default useChatStore;
