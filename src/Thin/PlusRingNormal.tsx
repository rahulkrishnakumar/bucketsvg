import * as React from "react";
import { SVGProps, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
interface SVGRProps {
  className?: string;
  color?: string;
  size?: string | number;
  style?: React.CSSProperties;
}

function SvgPlusRingNormal({
  color,
  style,
  size = 16,
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  const mergedStyle = { ...style, color };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 22 22"
      width={size}
      height={size}
      style={mergedStyle}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        stroke="#183153"
        strokeWidth={0.5}
        d="M16.6 11.3c0 .5-.4 1-.8 1h-4.3v3.4c0 .5-.5.8-1 .8s-1-.4-1-.8v-3.4H5.7c-.5 0-.8-.5-.8-1s.4-1 .8-1h3.8V5.7c0-.5.5-.8 1-.8s1 .4 1 .8v4.6h4.2c.5 0 .9.5.9 1Z"
      />
      <path
        stroke="#183153"
        strokeWidth={0.5}
        d="M11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10Z"
      />
    </svg>
  );
}

const Memo = memo(SvgPlusRingNormal);
export default Memo;
