import React from 'react'
import { a } from '@react-spring/web'

export default function Overlay({ fill }: {fill: any}) {
  // Just a Figma export, the fill is animated
  return (
    <div className="overlay">
      <a.svg viewBox="0 0 583 720" fill={fill} xmlns="http://www.w3.org/2000/svg">
        {/* <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={11} fontWeight={500} letterSpacing="0em">
          <tspan x={40} y={188.318} children="Major in Computer Science, DGIST" />
        </text>
        <text fill="#E8B059" style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={52} fontWeight="bold" letterSpacing="0em">
          <tspan x={40} y={257.909} children={'3D Portfolio'} />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={12} fontWeight="bold" letterSpacing="0em">
          <tspan x={40} y={270.909} />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={40} fontWeight="bold" letterSpacing="0em">
          <tspan x={40} y={321.909} children="Hi, my" />
          <tspan x={40} y={372.909} children="name is Yeongjae-Kong." />
          <tspan x={40} y={423.909} children="I'm Full-stack developer." />
          <tspan x={40} y={474.909} children="Welcome to my website!" />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontFamily="Inter" fontSize={11} fontWeight={500} letterSpacing="0em">
          <tspan x={366} y={640.318} children="Develop with haejune-jung" />
        </text> */}
      </a.svg>
    </div>
  )
}
