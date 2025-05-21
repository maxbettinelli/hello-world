import { useEffect, useState } from 'react'
import Head from 'next/head'

const posts = [
  { id: 1, text: 'This is a bigger card from SilkHQ components.' },
  { id: 2, text: 'Cards fill most of the screen like a dating app.' },
  { id: 3, text: 'You can scroll vertically as you would on Twitter.' },
]

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // load SilkHQ web components
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@silk-ui/components@latest/dist/silkhq-components.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  const themeHref = theme === 'light'
    ? 'https://cdn.jsdelivr.net/npm/@silk-ui/theme@latest/dist/light.css'
    : 'https://cdn.jsdelivr.net/npm/@silk-ui/theme@latest/dist/dark.css'

  return (
    <>
      <Head>
        <title>SilkHQ Feed Demo</title>
        <link id="theme-style" rel="stylesheet" href={themeHref} />
      </Head>
      <button
        className="fixed top-2 right-2 z-10 px-3 py-1 border rounded"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
      <div className="flex flex-col items-center p-4 space-y-4">
        {posts.map(post => (
          <silk-card
            key={post.id}
            class="w-[90vw] max-w-[500px] h-[70vh] flex items-center justify-center text-center text-xl"
          >
            {post.text}
          </silk-card>
        ))}
      </div>
    </>
  )
}
