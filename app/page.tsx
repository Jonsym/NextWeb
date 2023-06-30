import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Product from './components/Product'
import Categorie from './components/Categorie'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Product/>
      <Categorie/>
      <Footer/>
    </main>
  )
}
