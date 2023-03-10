import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import ChatView from '@/views/Chat';

export default function ChatPage() {
  return (
    <Layout>
      <Seo />

      <div className='align-items relative flex h-full items-center justify-center px-4'>
        <header></header>
        <ChatView />
      </div>
    </Layout>
  );
}
