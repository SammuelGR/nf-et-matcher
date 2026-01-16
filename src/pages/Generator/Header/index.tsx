import Sticker from '@/components/Sticker';

export default function Header() {
  return (
    <header className="px-4 py-6 flex flex-col gap-4">
      <h1 className="text-center text-primary text-4xl md:text-5xl font-black tracking-wider neon-text-pink">
        <span className="neon-text-green">NF_ET</span>inder
      </h1>

      <div className="flex gap-2 justify-center items-center">
        <span className="text-sm font-medium">Defizeros Edition</span>

        <Sticker text="Degen" variant="purple" />
      </div>
    </header>
  );
}
