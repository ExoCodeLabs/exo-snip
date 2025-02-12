import { notFound } from "next/navigation"
import Link from "next/link"
import CodeSnippet from "@/components/CodeSnippet"
import TechStacks from "@/lib/content"

export function generateStaticParams() {
  return [
    ...Object.keys(TechStacks).map((tech) => ({
      technology: tech,
    })),
    { technology: "favicon.ico" },
  ]
}

export default function TechnologyPage({ params }) {
  const tech = TechStacks[params.technology]

  if (!tech) {
    notFound()
  }

  const IconComponent = tech.icon

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        {/* <IconComponent className="w-12 h-12 mr-4 text-orange-500" /> */}
        <h1 className="text-4xl font-bold text-orange-500">
          {tech.name} Snippets
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
          About {tech.name}
        </h2>
        <p className="text-gray-300">{tech.description}</p>
      </div>
      {tech.snippets.map((snippet, index) => (
        <CodeSnippet key={index} {...snippet} />
      ))}
    </div>
  )
}
