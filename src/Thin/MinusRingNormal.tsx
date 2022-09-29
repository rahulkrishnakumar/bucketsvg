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

function SvgMinusRingNormal({
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
      viewBox="0 0 24 24"
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
        d="M.25 12C.25 5.538 5.538.25 12 .25S23.75 5.538 23.75 12 18.462 23.75 12 23.75.25 18.462.25 12Z"
      />
      <path
        stroke="#183153"
        strokeMiterlimit={10}
        strokeWidth={0.5}
        d="M18 13H6c-.6 0-1-.4-1-1s.4-1 1-1h12c.6 0 1 .4 1 1s-.4 1-1 1Z"
      />
    </svg>
  );
}

const Memo = memo(SvgMinusRingNormal);
export default Memo;
