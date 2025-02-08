"use client"

import CodeSnippet from "@/components/CodeSnippet"
import Link from "next/link"
import Image from "next/image"

const reactDescription = `
React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components
and efficiently update and render them when data changes. React uses a virtual DOM for performance optimization and
supports both client-side and server-side rendering.

The following snippets demonstrate key concepts in React:
1. Functional Components: The basic building blocks of React applications.
2. useState Hook: Manages state within functional components.
3. useEffect Hook: Handles side effects in functional components, such as data fetching or DOM manipulation.
`

const reactSnippets = [
  {
    title: "Functional Component",
    code: `import React from 'react'

const MyComponent = ({ name }) => {
  return <div>Hello, {name}!</div>
}

export default MyComponent`,
    language: "jsx",
    description:
      "Functional components are the modern way to write React components. They are simple JavaScript functions that accept props and return JSX.",
  },
  {
    title: "useState Hook",
    code: `import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Counter`,
    language: "jsx",
    description:
      "The useState hook allows functional components to manage local state. It returns a stateful value and a function to update it.",
  },
  {
    title: "useEffect Hook",
    code: `import React, { useState, useEffect } from 'react'

const DataFetcher = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data')
      const result = await response.json()
      setData(result)
    }

    fetchData()
  }, [])

  return <div>{data ? <p>{JSON.stringify(data)}</p> : <p>Loading...</p>}</div>
}

export default DataFetcher`,
    language: "jsx",
    description:
      "The useEffect hook is used for side effects in functional components. It's commonly used for data fetching, subscriptions, or manually changing the DOM.",
  },
]

export default function ReactSnippets() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Image src="/react-logo.png" alt="React logo" width={60} height={60} className="mr-4" />
        <h1 className="text-4xl font-bold text-orange-500">React Snippets</h1>
      </div>
      <Link href="/" className="text-orange-400 hover:underline mb-8 inline-block">
        &larr; Back to Home
      </Link>
      <div className="bg-gray-800 rounded-lg p-6 mb-8 border border-gray-700">
        <h2 className="text-2xl font-semibold text-orange-400 mb-4">About React</h2>
        <p className="text-gray-300 whitespace-pre-line">{reactDescription}</p>
      </div>
      {reactSnippets.map((snippet, index) => (
        <div key={index} className="mb-12">
          <CodeSnippet {...snippet} />
          <p className="mt-4 text-gray-300">{snippet.description}</p>
        </div>
      ))}
    </div>
  )
}

