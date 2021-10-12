import React from 'react';
import { ThreeMFLoader } from 'three/examples/jsm/loaders/3MFLoader';
import { useLoader } from '@react-three/fiber';
import model from '../assets/models/crab.3mf';
import { useKeyState } from 'use-key-state';

const Model = () => {
  const geo = useLoader(ThreeMFLoader, model);
  const { space, ...keys } = useKeyState(
    {
      a: 'a',
      s: 's',
      d: 'd',
      f: 'f',
      g: 'g',
      space: 'space',
    },
    {
      ignoreRepeatEvents: false, // try holding the space bar!
    }
  );

  React.useLayoutEffect(() => {
    const controls = ['a', 's', 'd', 'f', 'g'];
    controls.forEach((control, index) => {
      const key = Object.keys(keys)[index];
      const down = keys[key].down;
      const pressed = keys[key].pressed;
      console.log('KEY', key);
      if (pressed) {
        console.log('PRESSED', pressed);
      }
      if (down) {
        console.log('DOWN', down);
      }
    });
  });
  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      <primitive
        object={geo}
        // rotation={[0, 0, 0]}
      />
    </group>
  );
};

export default Model;
