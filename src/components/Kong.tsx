import { useSpring } from "@react-spring/web";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { OrbitControls, Text } from "@react-three/drei";
import { Summer } from "quick-3d-views/src/lib";
import Overlay1 from "./Overlay1";
import {Overlay2} from "./Overlay2";
import Overlay3 from "./Overlay3";
import './styles.css';
import { useState } from "react";


export default function Kong() {
  // This spring controls the svg fill (text color)
  const [{ fill }, set] = useSpring({ fill: '#202020' }, []);
  const [isDayTime, setIsDayTime] = useState(true); // 상태 추가

  const pexel = (id: any) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`

  const images = [
    // Front
    { position: [0, 0, 1.5], rotation: [0, 0, 0], url: `https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbETRH6%2FbtsDKzkhITT%2FyIkkPWrg3bCHJVR8sLODL1%2Fimg.png`, text:"Sinabro is a social media app that records and shares precious moments in your daily life. The app allows users to record their daily lives in a diary format and share precious memories with friends." },
    // Left
    { position: [-1.6, 0, 1.9], rotation: [0, Math.PI / 7, 0], url: `https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdigBws%2FbtsDNqG5Pz0%2Fx3nsFQPF19iaTvW1nUUUP0%2Fimg.png`, text: "It is a hyperlocal community app project designed to solve the problem of joint purchase, cost reduction through joint delivery, and floor noise among apartment residents." },
    { position: [-2.8, 0, 2.75], rotation: [0, Math.PI / 3.5, 0], url: `https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbYgniK%2FbtsDUdlZTpd%2FMqCYpnqkwPAvzd9DGCuKX0%2Fimg.png`, text: "The Anomaly Detection with Human Data (called ADHD) is an AI project that learns AI models with Movenet & LSTM to detect abnormal situations such as assault by extracting Humanpose from CCTV (such as webcam) in real time to solve the recent surge in unmanned store crimes." },
    // Right
    { position: [1.6, 0, 1.9], rotation: [0, -Math.PI / 7, 0], url: pexel(310452) },
    { position: [2.8, 0, 2.75], rotation: [0, -Math.PI / 3.5, 0], url: pexel(1738986) }
  ]
  

  return (
    <div className="app-container">
      <div className="ocean-animation">
        <Summer isDayTime={isDayTime} />
      </div>
      <div className="scroll-container"> {/* 스크롤 가능한 컨테이너 */}
          <div className="fullcomponent">
            <Canvas className="canvas" dpr={[1, 2]}>
              <Scene setBg={set} onShapeClick={() => setIsDayTime(!isDayTime)} />
              <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
            </Canvas>
            <Overlay1 fill={fill} />
          </div>
          <div className="fullcomponent">
            <Overlay2 images={images} />
          </div>
          <div className="fullcomponent">
            <Canvas className="canvas" dpr={[1, 2]}>
              <Scene setBg={set} onShapeClick={() => setIsDayTime(!isDayTime)} />
              <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
            </Canvas>
            <Overlay3 fill={fill} />
          </div>
      </div>
    </div>
  );
}
