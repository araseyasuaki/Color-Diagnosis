import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center h-screen relative'>
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-purple-500 via-pink-500 to-cyan-400">
        展示会で使う色の診断です!!
      </h1>
      <p className='text-xl font-bold mt-5'>基本的に全5問...</p>
      <Link href="/question">
      <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-60 font-bold text-2xl text-black bg-white py-5 px-8 border-black border-2 rounded-full hover:text-white hover:bg-gradient-to-r hover:from-red-500 hover:via-orange-500 hover:via-yellow-500 hover:via-green-500 hover:via-blue-500 hover:via-purple-500 hover:via-pink-500 hover:to-cyan-400 transition-all text-center">
        診断を始める
      </button>
      </Link>
    </div>
  );
}
