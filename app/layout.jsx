import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ExoSnip Code Snippets",
  description:
    "AI-powered quick reference for various programming languages and tools",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-gray-900 text-gray-100 flex flex-col min-h-screen`}
      >
        <div className="flex-grow">
          <header className="bg-black p-4">
            <div className="container mx-auto">
              <h1 className="text-2xl font-bold text-orange-500">
                ExoSnip Code Snippets
              </h1>
            </div>
          </header>
          <main className="flex-grow">{children}</main>
        </div>
        <footer className="bg-gray-800 text-gray-300 py-4">
          <div className="container mx-auto text-center">
            <p>Designed and Developed by ExoCode Labs</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
