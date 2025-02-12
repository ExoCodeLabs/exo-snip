import Link from "next/link"
import {
  CodepenIcon as ReactIcon,
  GitGraphIcon as Git,
  NetworkIcon as Nodejs,
  FileJson,
  FileType,
  PiIcon as Python,
} from "lucide-react"

const technologies = [
  { name: "Express.js", slug: "express", icon: Nodejs },
  { name: "React", slug: "react", icon: ReactIcon },
  { name: "Node.js", slug: "nodejs", icon: Nodejs },
  { name: "Git", slug: "git", icon: Git },

  // { name: "JavaScript", slug: "javascript", icon: FileJson },
  // { name: "TypeScript", slug: "typescript", icon: FileType },
  // { name: "Python", slug: "python", icon: Python },
]

const roadmaps = [
  { name: "Frontend Development", url: "https://roadmap.sh/frontend" },
  { name: "Backend Development", url: "https://roadmap.sh/backend" },
  { name: "DevOps", url: "https://roadmap.sh/devops" },
  { name: "React", url: "https://roadmap.sh/react" },
  { name: "JavaScript", url: "https://roadmap.sh/javascript" },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-orange-500">
        Code Snippets Library
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {technologies.map((tech) => (
          <Link
            key={tech.slug}
            href={`/${tech.slug}`}
            className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-orange-500/20 transition-shadow border border-gray-700"
          >
            <div className="flex items-center mb-4">
              <tech.icon className="w-8 h-8 mr-4 text-orange-500" />
              <h3 className="text-2xl font-semibold text-orange-400">
                {tech.name}
              </h3>
            </div>
            <p className="text-gray-400">View {tech.name} snippets</p>
          </Link>
        ))}
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-8 text-center text-orange-500">
        Learning Roadmaps
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roadmaps.map((roadmap) => (
          <a
            key={roadmap.name}
            href={roadmap.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-orange-500/20 transition-shadow border border-gray-700"
          >
            <h3 className="text-2xl font-semibold text-orange-400 mb-2">
              {roadmap.name}
            </h3>
            <p className="text-gray-400">View roadmap</p>
          </a>
        ))}
      </div>
    </div>
  )
}
