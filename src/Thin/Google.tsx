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

function SvgGoogle({
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
      <path fill="#fff" d="M0 0h24v24H0z" />
      <path
        stroke="#183153"
        strokeLinejoin="round"
        strokeWidth={0.5}
        d="M21.456 9.904h-9.259a.25.25 0 0 0-.25.25v3.839c0 .138.112.25.25.25h5.057c-.5 2.028-2.343 3.499-5.057 3.499-3.104 0-5.638-2.632-5.638-5.748 0-3.117 2.534-5.743 5.638-5.743 1.388 0 2.624.472 3.603 1.39a.25.25 0 0 0 .382.033l2.775-2.775a.25.25 0 0 0-.006-.36c-1.749-1.63-4.03-2.633-6.754-2.633l9.259 7.998Zm0 0h.001c.13 0 .237.1.249.226m-.25-.226.25.226m0 0c.123.668.19 1.364.19 2.091 0 2.868-.96 5.34-2.663 7.095-1.703 1.756-4.133 2.778-7.036 2.778l9.509-11.964ZM8.334 21.326c1.225.508 2.537.768 3.863.768L2.103 12a10.09 10.09 0 0 0 6.23 9.326ZM2.87 8.136A10.09 10.09 0 0 0 2.103 12L12.197 1.906a10.091 10.091 0 0 0-9.326 6.23Z"
      />
    </svg>
  );
}

const Memo = memo(SvgGoogle);
export default Memo;
