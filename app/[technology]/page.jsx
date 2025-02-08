"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import CodeSnippet from "@/components/CodeSnippet"
import {
  CodepenIcon as ReactIcon,
  GitGraphIcon as Git,
  NetworkIcon as Nodejs,
  FileJson,
  FileType,
  PiIcon as Python,
} from "lucide-react"

const technologies = {
  react: {
    name: "React",
    icon: ReactIcon,
    description:
      "React is a JavaScript library for building user interfaces, particularly single-page applications.",
    snippets: [
      {
        title: "Functional Component",
        code: `import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default Welcome;`,
        language: "jsx",
      },
      {
        title: "useState Hook",
        code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;`,
        language: "jsx",
      },
    ],
  },
  git: {
    name: "Git",
    icon: Git,
    description:
      "Git is a distributed version control system for tracking changes in source code during software development.",
    snippets: [
      {
        title: "Initialize a repository",
        code: `git init`,
        language: "bash",
      },
      {
        title: "Clone a repository",
        code: `git clone https://github.com/username/repository.git`,
        language: "bash",
      },
      {
        title: "Add and commit changes",
        code: `git add .
git commit -m "Commit message"`,
        language: "bash",
      },
    ],
  },
  nodejs: {
    name: "Node.js",
    icon: Nodejs,
    description:
      "Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser.",
    snippets: [
      {
        title: "HTTP Server",
        code: `const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});`,
        language: "javascript",
      },
      {
        title: "File System Operations",
        code: `const fs = require('fs');

// Read file
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Write file
fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
  if (err) throw err;
  console.log('File has been saved!');
});`,
        language: "javascript",
      },
    ],
  },
  javascript: {
    name: "JavaScript",
    icon: FileJson,
    description:
      "JavaScript is a high-level, interpreted programming language that is one of the core technologies of the World Wide Web.",
    snippets: [
      {
        title: "Variables and Data Types",
        code: `let name = 'John';
const age = 30;
var isStudent = true;

console.log(typeof name);     // 'string'
console.log(typeof age);      // 'number'
console.log(typeof isStudent);// 'boolean'`,
        language: "javascript",
      },
      {
        title: "Functions",
        code: `function greet(name) {
  return \`Hello, \${name}!\`;
}

const greetArrow = (name) => \`Hello, \${name}!\`;

console.log(greet('Alice'));      // 'Hello, Alice!'
console.log(greetArrow('Bob'));   // 'Hello, Bob!'`,
        language: "javascript",
      },
    ],
  },
  typescript: {
    name: "TypeScript",
    icon: FileType,
    description:
      "TypeScript is a strongly typed programming language that builds on JavaScript, adding optional static typing and other features.",
    snippets: [
      {
        title: "Basic Types",
        code: `let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];

enum Color {Red, Green, Blue}
let c: Color = Color.Green;

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean`,
        language: "typescript",
      },
      {
        title: "Interfaces",
        code: `interface Person {
  firstName: string;
  lastName: string;
  age?: number;
}

function greet(person: Person) {
  return \`Hello, \${person.firstName} \${person.lastName}\`;
}

let user = { firstName: "Jane", lastName: "Doe" };
console.log(greet(user)); // Output: Hello, Jane Doe`,
        language: "typescript",
      },
    ],
  },
  python: {
    name: "Python",
    icon: Python,
    description:
      "Python is a high-level, interpreted programming language known for its simplicity and readability.",
    snippets: [
      {
        title: "Variables and Data Types",
        code: `name = "Alice"
age = 30
height = 1.75
is_student = True

print(type(name))    # <class 'str'>
print(type(age))     # <class 'int'>
print(type(height))  # <class 'float'>
print(type(is_student))  # <class 'bool'>`,
        language: "python",
      },
      {
        title: "Functions",
        code: `def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))        # Output: Hello, Alice!
print(greet("Bob", "Hi"))    # Output: Hi, Bob!

# Lambda function
square = lambda x: x ** 2
print(square(5))  # Output: 25`,
        language: "python",
      },
    ],
  },
}

export default function TechnologyPage({ params }) {
  const tech = technologies[params.technology]

  if (!tech) {
    notFound()
  }

  const IconComponent = tech.icon

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <IconComponent className="w-12 h-12 mr-4 text-orange-500" />
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
