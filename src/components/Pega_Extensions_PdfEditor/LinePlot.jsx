import * as d3 from 'd3';
import { useRef, useEffect } from 'react';
import { Svg, G, Path } from '@react-pdf/renderer';

export default function LinePlot({
  data,
  width = 640,
  height = 400,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 30,
  marginLeft = 40
}) {
  const gx = useRef();
  const gy = useRef();
  const x = d3.scaleLinear([0, data.length - 1], [marginLeft, width - marginRight]);
  const y = d3.scaleLinear(d3.extent(data), [height - marginBottom, marginTop]);
  const line = d3.line((d, i) => x(i), y);
  // eslint-disable-next-line no-void
  useEffect(() => void d3.select(gx.current).call(d3.axisBottom(x)), [gx, x]);
  // eslint-disable-next-line no-void
  useEffect(() => void d3.select(gy.current).call(d3.axisLeft(y)), [gy, y]);
  return (
    <Svg width={width} height={height}>
      <G ref={gx} transform={`translate(0,${height - marginBottom})`} />
      <G ref={gy} transform={`translate(${marginLeft},0)`} />
      <Path fill='none' stroke='currentColor' strokeWidth='1.5' d={line(data)} />
      <G fill='white' stroke='currentColor' strokeWidth='1.5'>
        {data.map((d, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <circle key={i} cx={x(i)} cy={y(d)} r='2.5' />
        ))}
      </G>
    </Svg>
  );
}
