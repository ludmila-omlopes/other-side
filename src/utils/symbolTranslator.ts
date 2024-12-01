const symbolMap: { [key: string]: string } = {
        "a": "a",
        "b": "b",
        "c": "c",
        "d": "d",
        "e": "e",
        "f": "f",
        "g": "g",
        "h": "h",
        "i": "i",
        "j": "j",
        "k": "k",
        "l": "l",
        "m": "m",
        "n": "n",
        "o": "o",
        "p": "p",
        "q": "q",
        "r": "r",
        "s": "s",
        "t": "t",
        "u": "u",
        "v": "v",
        "w": "w",
        "x": "x",
        "y": "y",
        "z": "z",
        "0": "0",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
  };
  
  const reverseSymbolMap: { [key: string]: string } = Object.entries(symbolMap).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
  }, {} as { [key: string]: string });
  
  export function englishToSymbols(text: string): string[] {
    return text.toLowerCase().split('').map(char => symbolMap[char] || char);
  }
  
  export function symbolsToEnglish(symbols: string[]): string {
    return symbols.map(symbol => reverseSymbolMap[symbol] || symbol).join('');
  }
  
  export function getSymbolList(): string[] {
    return Object.values(symbolMap);
  }
  
  export { symbolMap };
  
  