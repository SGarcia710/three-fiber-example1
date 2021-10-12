import React from 'react';
import Sphere from './components/Sphere';
import ThreeScene from './components/ThreeScene';
import { OrbitControls, Stars } from '@react-three/drei';
import Model from './components/Model';

function App() {
  return (
    <div
      style={{
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <ThreeScene>
        <color attach="background" args={['#161c24']} />
        <Sphere color="#00ff00" position={[-1, -2, 0]} />
        <Sphere color="#ff0000" position={[1, -2, 0]} />
        <React.Suspense fallback={null}>
          <Model />
        </React.Suspense>
        <ambientLight />
        <OrbitControls
        // autoRotate
        />
        <Stars count={1000} factor={3} />
      </ThreeScene>
    </div>
  );
}

export default App;
