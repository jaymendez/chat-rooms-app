import { signOut } from 'firebase/auth';

import useChatStore from '@/stores/useChatStore';

import { auth } from '@/config/firebase';

const SignOutButton = () => {
  const { setCurrentUser } = useChatStore((state) => ({
    setCurrentUser: state.setCurrentUser,
  }));

  return (
    <button
      className='rounded-md bg-red-600 py-1 px-2 text-sm text-stone-200'
      onClick={() => {
        signOut(auth);
        setCurrentUser(null);
      }}
    >
      Sign out
    </button>
  );
};

export default SignOutButton;
