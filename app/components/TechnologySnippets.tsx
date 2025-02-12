"use client"

import CodeSnippet from "@/components/CodeSnippet"
import Link from "next/link"
import Image from "next/image"

interface Snippet {
  title: string
  code: string
  language: string
  description: string
}

interface TechnologyData {
  name: string
  logo: string
  description: string
  snippets: Snippet[]
}

interface TechnologySnippetsProps {
  readonly technology: TechnologyData
}

export default function TechnologySnippets({
  technology,
}: TechnologySnippetsProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Image
          src={technology.logo || "/placeholder.svg"}
          alt={`${technology.name} logo`}
          width={60}
          height={60}
          className="mr-4"
        />
        <h1 className="text-4xl font-bold text-orange-500">
          {technology.name} Snippets
        </h1>
      </div>
      <Link
        href="/"
        className="text-orange-400 hover:underline mb-8 inline-block"
      >
        &larr; Back to Home
      </Link>
      <div className="bg-gray-800 rounded-lg p-6 mb-8 border border-gray-700">
        <h2 className="text-2xl font-semibold text-orange-400 mb-4">
          About {technology.name}
        </h2>
        <p className="text-gray-300 whitespace-pre-line">
          {technology.description}
        </p>
      </div>
      {technology.snippets.map((snippet, index) => (
        <div key={index} className="mb-12">
          <CodeSnippet {...snippet} />
          <p className="mt-4 text-gray-300">{snippet.description}</p>
        </div>
      ))}
    </div>
  )
}
