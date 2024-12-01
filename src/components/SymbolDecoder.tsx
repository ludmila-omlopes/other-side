'use client'

import React, { useState } from 'react'
import { englishToSymbols, symbolsToEnglish, symbolMap } from '../utils/symbolTranslator'
import Icon from './Icon'
import AnimatedTitle from './AnimatedTitle'

export default function SymbolDecoder() {
  const [englishText, setEnglishText] = useState('')
  const [symbolText, setSymbolText] = useState<string[]>([])

  const handleEnglishChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    setEnglishText(text)
    setSymbolText(englishToSymbols(text))
  }

  const handleSymbolClick = (symbol: string) => {
    setSymbolText(prevSymbols => [...prevSymbols, symbol])
    setEnglishText(prevText => prevText + symbolsToEnglish([symbol]))
  }

  const handleClearSymbols = () => {
    setSymbolText([])
    setEnglishText('')
  }

  return (
    <>
      <div className="mb-8 text-center">
        <AnimatedTitle 
          text="Talk to the Other Side..." 
          className="text-2xl font-bold mb-2"
        />
        <p className="text-green-600">v1.0.0</p>
      </div>
      
      <div className="mb-8">
        <div className="flex items-center mb-2">
          <span className="text-yellow-400 mr-2">$</span>
          <h2 className="text-xl">Symbols</h2>
        </div>
        <div className="grid grid-cols-6 gap-2">
        {Object.entries(symbolMap).map(([char, symbol]) => (
              <button
                key={char}
                onClick={() => handleSymbolClick(symbol)}
                className="text-2xl p-2 border rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 font-['SinaisEstrangeiro-Regular']"
              >
                {symbol}
              </button>
            ))}
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center mb-2">
          <span className="text-yellow-400 mr-2">$</span>
          <h2 className="text-xl">Decode the secrets within</h2>
        </div>
        <div className="flex flex-wrap gap-2 p-2 border border-green-600 min-h-[50px] mb-4 break-words font-['SinaisEstrangeiro-Regular'] text-2xl">
          {symbolText}
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center mb-2">
          <span className="text-yellow-400 mr-2">$</span>
          <h2 className="text-xl">Speak to the other side. Be careful. It might respond.</h2>
        </div>
        <textarea
          value={englishText}
          onChange={handleEnglishChange}
          placeholder="Enter text here..."
          className="w-full h-32 p-2 bg-black text-green-400 border border-green-600 focus:border-green-400 focus:outline-none resize-none"
        />
      </div>

      <footer className="mt-12 text-center text-green-600">
        <p>
        </p>This is a fan-made website. All rights to <a href="https://ordemparanormal.com.br/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Ordem Paranormal</a>.
       <p className="mt-2">

          Made with love by <a href="https://github.com/ludmila-omlopes" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Definn</a> 🩷
        </p>
      </footer>
    </>
  )
}

