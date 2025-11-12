import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <HowItWorks />
      </main>
      <footer className="py-10 text-center text-sm text-gray-500">© 2025 Zomato – Deliciously fast</footer>
    </div>
  )
}

export default App
