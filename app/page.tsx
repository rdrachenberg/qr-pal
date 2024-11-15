'use client'

import { Footer } from './components/Fooler';
import { Header } from './components/Header';
import { Qr } from './components/Qr';

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-r from-blue-200 to-cyan-200">
      <meta name="google" content="notranslate" />
      <Header />
      <div className="flex flex-col">
        <Qr />
      </div>
      <Footer />
    </main>
  )
}
