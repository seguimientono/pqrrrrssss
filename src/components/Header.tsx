import { Dog, Cat, Bird } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-purple-600 text-white py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Dog className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Mis Amigos Peludos</h1>
        </div>
        <div className="flex gap-4">
          <Cat className="w-6 h-6" />
          <Bird className="w-6 h-6" />
        </div>
      </div>
    </header>
  );
}