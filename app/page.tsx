'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { Qr } from './components/Qr';

export default function Home() {
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center ">
        <Qr />
      </div>
    </main>
  )
}
