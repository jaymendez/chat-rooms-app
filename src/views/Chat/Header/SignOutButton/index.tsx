import { signOut } from 'firebase/auth';

import { auth } from '@/config/firebase';

const SignOutButton = () => {
  return (
    <button className='text-white' onClick={() => signOut(auth)}>
      Sign out
    </button>
  );
};

export default SignOutButton;
