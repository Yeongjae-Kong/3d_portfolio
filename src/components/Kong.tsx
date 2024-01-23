import { useSpring } from "@react-spring/web";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { OrbitControls, Text } from "@react-three/drei";
import { Summer } from "quick-3d-views/src/lib";
import Overlay from "./Overlay";
import './styles.css';
import { useState } from "react";


export default function Kong() {
  // This spring controls the svg fill (text color)
  const [{ fill }, set] = useSpring({ fill: '#202020' }, []);
  const [isDayTime, setIsDayTime] = useState(true); // 상태 추가

  const components = Array(3).fill(null);
  return (

    <div className="app-container">
      <div className="ocean-animation">
        <Summer isDayTime={isDayTime} />
      </div>
      <div className="scroll-container"> {/* 스크롤 가능한 컨테이너 */}
        {components.map((_, index) => (
          <div key={index} className="fullcomponent">
            <Canvas className="canvas" dpr={[1, 2]}>
              <Scene setBg={set} onShapeClick={() => setIsDayTime(!isDayTime)} />
              <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
            </Canvas>
            <Overlay fill={fill} />
          </div>
        ))}
      </div>
    </div>
  );
}
