import SymbolDecoder from '../components/SymbolDecoder'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-green-400 p-4 font-mono">
      <div className="max-w-4xl mx-auto">
        <SymbolDecoder />
      </div>
    </div>
  )
}

