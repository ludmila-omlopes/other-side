"use client"

import { useState, useCallback, useEffect } from "react"
import { useDropzone } from "react-dropzone"
import { Cpu, Upload } from 'lucide-react'
import { analyzeImage } from "./actions"

export default function MatrixAIAnalysis() {
  const [analysis, setAnalysis] = useState<string>("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setIsAnalyzing(true)
      const file = acceptedFiles[0]
      const formData = new FormData()
      formData.append("image", file)
      
      // Create image preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
      
      try {
        const result = await analyzeImage(formData)
        setAnalysis(result)
      } catch (error) {
        console.error("Error analyzing image:", error)
        setAnalysis("Error analyzing image. Please try again.")
      } finally {
        setIsAnalyzing(false)
      }
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div className="min-h-screen bg-black text-green-400 p-8 flex flex-col items-center justify-start font-mono">
      <h1 className="text-2xl font-bold mb-8">Smart Decoder</h1>
      
      <div
        {...getRootProps()}
        className={`border-2 border-dashed border-green-400 p-12 rounded-lg mb-8 text-center cursor-pointer transition-all ${
          isDragActive ? "bg-green-900" : "hover:bg-green-900/30"
        }`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto mb-4 h-12 w-12" />
        <p className="text-xl">
          {isDragActive
            ? "Drop the image here"
            : "Drag 'n' drop an image here, or click to select one"}
        </p>
      </div>

      {imagePreview && (
        <div className="mb-8 border border-green-400 p-2 rounded-lg">
          <img
            src={imagePreview}
            alt="Uploaded image preview"
            className="max-w-xs max-h-48 object-contain mx-auto"
          />
        </div>
      )}

      {isAnalyzing && (
        <div className="flex items-center space-x-2 mb-4">
          <Cpu className="animate-spin" />
          <span>Analyzing...</span>
        </div>
      )}

      {analysis && (
        <div className="border border-green-400 p-6 rounded-lg max-w-2xl w-full">
          <h2 className="text-2xl font-semibold mb-4">Analysis Result:</h2>
          <TypewriterEffect text={analysis} />
        </div>
      )}
    </div>
  )
}

function TypewriterEffect({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("")

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i))
        i++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [text])

  return <p className="font-mono">{displayText}</p>
}

