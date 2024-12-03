const knowledgeMap: { [key: string]: string } = {
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
        ".": ".",
        ",": ",",
        "?": "?",
        "!": "!",
        ":": ":",
        ";": ";",
  };
  
  const reverseSymbolMap: { [key: string]: string } = Object.entries(knowledgeMap).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
  }, {} as { [key: string]: string });
  
  export function englishToSymbols(text: string): string[] {
    return text.toLowerCase().split('').map(char => knowledgeMap[char] || char);
  }
  
  export function symbolsToEnglish(symbols: string[]): string {
    return symbols.map(symbol => reverseSymbolMap[symbol] || symbol).join('');
  }
  
  export function getSymbolList(): string[] {
    return Object.values(knowledgeMap);
  }
  
  export { knowledgeMap };
  
  