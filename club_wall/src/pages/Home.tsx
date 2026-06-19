import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ClubList from '../components/ClubList';
import CategoryFilter from '../components/CategoryFilter';
import { useFilteredClubs, useClubNavigation } from '../hooks/useClub';
import type { Category } from '../data/clubs';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const filteredClubs = useFilteredClubs(selectedCategory);
  const { goToClub } = useClubNavigation();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <CategoryFilter
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <ClubList clubs={filteredClubs} onClubClick={goToClub} />
      </main>
      <Footer />
    </div>
  );
}
