import Link from 'next/link';

export default function Home() {
  return (
    <div className=''>
      <h1>色で見る性格診断</h1>
      <p>8つの色からあなたの性格を診断します！</p>
      <Link href="/question1">
        <button>
          診断を始める
        </button>
      </Link>
    </div>
  );
}
