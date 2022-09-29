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

function SvgPlusRing({
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
        fill="#183153"
        d="M18 13.5H6c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1Z"
      />
      <path
        fill="#183153"
        d="M13.5 6v12c0 .6-.4 1-1 1h-1c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h1c.6 0 1 .5 1 1Z"
      />
      <rect width={23} height={23} x={0.5} y={0.5} stroke="#183153" rx={0.5} />
    </svg>
  );
}

const Memo = memo(SvgPlusRing);
export default Memo;
