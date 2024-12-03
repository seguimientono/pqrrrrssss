import React from 'react';
import { Header } from './components/Header';
import { PetCard } from './components/PetCard';

function App() {
  const pets = [
    {
      name: "Luna la Perrita",
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
      description: "A Luna le encanta jugar con pelotas y dar abrazos"
    },
    {
      name: "Milo el Gatito",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
      description: "Milo es muy curioso y le gusta dormir al sol"
    },
    {
      name: "Pepe el Loro",
      image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3",
      description: "Pepe canta canciones y saluda a todos"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">
          ¡Conoce a nuestras mascotas!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pets.map((pet) => (
            <PetCard key={pet.name} {...pet} />
          ))}
        </div>
      </main>
      <footer className="bg-purple-600 text-white py-4 mt-8">
        <p className="text-center">Hecho con ❤️ para todos los amantes de las mascotas</p>
      </footer>
    </div>
  );
}

export default App;