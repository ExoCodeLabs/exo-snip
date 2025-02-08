"use client"

import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Copy, Check } from "lucide-react"

export default function CodeSnippet({ code, language, title }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold text-orange-400">{title}</h3>
        <button
          onClick={copyToClipboard}
          className="flex items-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded"
        >
          {copied ? (
            <>
              <Check size={16} className="mr-1" />
              Copied!
            </>
          ) : (
            <>
              <Copy size={16} className="mr-1" />
              Copy
            </>
          )}
        </button>
      </div>
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: "1rem",
            fontSize: "0.875rem",
            lineHeight: "1.5",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

