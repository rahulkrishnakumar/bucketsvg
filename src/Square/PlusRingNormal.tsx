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
        d="M23 23.5H1c-.186 0-.303-.06-.371-.129C.559 23.303.5 23.186.5 23V1C.5.814.56.697.629.629.697.559.814.5 1 .5h22c.186 0 .303.06.371.129.07.068.129.185.129.371v22a.51.51 0 0 1-.166.334.51.51 0 0 1-.334.166Z"
      />
      <path
        fill="#183153"
        d="M18 13H6c-.6 0-1-.4-1-1s.4-1 1-1h12c.6 0 1 .4 1 1 0 .5-.5 1-1 1Z"
      />
      <path
        fill="#183153"
        d="M13 6v12c0 .6-.4 1-1 1s-1-.4-1-1V6c0-.6.4-1 1-1 .5 0 1 .4 1 1Z"
      />
    </svg>
  );
}

const Memo = memo(SvgPlusRingNormal);
export default Memo;
