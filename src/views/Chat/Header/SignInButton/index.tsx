import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import useChatStore from '@/stores/useChatStore';

import { auth } from '@/config/firebase';

const SignInButton = () => {
  const setCurrentUser = useChatStore((state) => state.setCurrentUser);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        setCurrentUser(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        console.log(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <button
      className='rounded-md bg-red-600 py-1 px-2 text-sm text-stone-200 hover:opacity-70'
      onClick={signInWithGoogle}
    >
      Google Sign In
    </button>
  );
};

export default SignInButton;
