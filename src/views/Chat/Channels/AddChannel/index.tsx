import { Dialog, Transition } from '@headlessui/react';
import { collection, doc, setDoc } from 'firebase/firestore';
import { Fragment, useState } from 'react';

import { db } from '@/config/firebase';

const AddChannel = () => {
  const [isOpen, toggleOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const channelSource = `channels`;
    const ref = doc(collection(db, channelSource));
    await setDoc(ref, {
      name: e.target.channel.value,
      members: [],
    });
    toggleOpen(false);
  };

  return (
    <>
      <div className='flex flex-grow items-end justify-center'>
        <button
          className='rounded-lg p-2 text-lg tracking-wider text-stone-200 hover:text-sky-700'
          onClick={() => toggleOpen(true)}
        >
          Add Channel
        </button>
      </div>
      <Transition.Root appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-50 overflow-y-hidden'
          onClose={() => toggleOpen(false)}
        >
          <div className='min-h-screen px-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-opacity-75 backdrop-blur-sm transition-opacity' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='inline-block h-screen align-middle'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='drop-shadow-1 inline-block w-full max-w-md transform overflow-hidden rounded-2xl align-middle transition-all'>
                <form onSubmit={handleSubmit}>
                  <div className='flex flex-col gap-y-3 bg-stone-700 p-3'>
                    <div className='text-xl text-stone-200'>Add a channel</div>
                    <div className='mx-2 mb-4 flex h-11 w-auto items-center space-x-1.5 rounded-2xl bg-stone-200 p-3 focus:!border-stone-500 focus:ring-1 focus:ring-stone-500 disabled:cursor-not-allowed'>
                      <input
                        placeholder='Type a channel name...'
                        name='channel'
                        className='w-full bg-transparent outline-0 placeholder:text-stone-500'
                      />
                      <div></div>
                    </div>
                    <button
                      type='submit'
                      className='mx-2 w-full max-w-[100px] self-end rounded-md bg-red-600 py-1 px-2 text-sm text-stone-200 hover:opacity-70'
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default AddChannel;
