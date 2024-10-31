import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main style={{ 
      height: '100vh', 
      width: '100vw', 
      overflow: 'hidden', 
      margin: 0, 
      padding: 0 
    }}>
      <Spline
        scene="https://prod.spline.design/lbK-nmwpas8c21lg/scene.splinecode"
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%' 
        }}
      />
    </main>
  );
}