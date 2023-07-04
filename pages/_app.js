/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">Metaverse Marketplace</p>
        <div className="flex mt-4">
          <Link href="/" className="mr-4 text-pink-500">
            Home
          </Link>
          <Link href="/create-nft" className="mr-6 text-pink-500">
            Sell NFT
          </Link>
          <Link href="/my-nfts" className="mr-6 text-pink-500">
            My NFTs
          </Link>
          <Link href="/dashboard" className="mr-6 text-pink-500">
            Dashboard
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp