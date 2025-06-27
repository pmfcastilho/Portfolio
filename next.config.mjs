/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
export default function Home() {
  return (
    <main className="w-screen h-screen">
      <iframe
        src="https://my.spline.design/claritystream-prmHX2kmE8ZqWdyyCYdOt3bu/"
        frameBorder="0"
        width="100%"
        height="100%"
        allow="fullscreen"
        style={{ border: 'none' }}
      />
    </main>
  );
}
