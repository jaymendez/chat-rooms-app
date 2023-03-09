import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '@/config/firebase';
import SignInButton from '@/views/Chat/Header/SignInButton';
import SignOutButton from '@/views/Chat/Header/SignOutButton';

const ChatHeader = () => {
  const [user] = useAuthState(auth);

  return (
    <div className='flex w-full items-center justify-between rounded-t-xl bg-blue-900 px-3 py-2'>
      <div></div>
      <div>{!user ? <SignInButton /> : <SignOutButton />}</div>
    </div>
  );
};

export default ChatHeader;
