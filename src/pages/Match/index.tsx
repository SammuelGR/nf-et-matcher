import Background from '@/ui/Background';

import Content from './Content';
import Header from './Header';

export default function Match() {
  return (
    <div className="min-h-screen relative">
      <Background />

      <div className="flex flex-col min-h-screen relative z-10">
        <Header />

        <Content />
      </div>
    </div>
  );
}
