import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="pt-10 " style={{ textAlign: "center" }}>
        <Link href="/content/novel">行っちゃうぞ！</Link>
      </div>
    </div>
  );
}
