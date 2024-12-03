import Link from 'next/link'
import { Courier_Prime } from 'next/font/google'

const courier = Courier_Prime({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-center bg-black p-24 ${courier.className}`}>
      <div className="text-center">
        <h1 className="mb-8 text-4xl font-bold text-green-500 animate-pulse">
          The Terminal
        </h1>
        <p className="mb-12 text-xl text-green-400">
          Choose your path:
        </p>
        <div className="space-y-4">
          <Link href="/stranger" className="block w-64 mx-auto py-2 text-lg text-green-300 border border-green-500 hover:bg-green-900 transition-colors duration-300">
            Talk to &quot;The Stranger&quot;
          </Link>
          <Link href="/knowledge" className="block w-64 mx-auto py-2 text-lg text-green-300 border border-green-500 hover:bg-green-900 transition-colors duration-300">
            Talk to &quot;The Other Side&quot;
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-500 text-opacity-50 animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
          </div>
        ))}
      </div>
    </main>
  )
}

