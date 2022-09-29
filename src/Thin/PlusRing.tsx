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
      viewBox="0 0 26 26"
      width={size}
      height={size}
      style={mergedStyle}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        stroke="#183153"
        strokeMiterlimit={10}
        strokeWidth={0.5}
        d="M13 1C6.4 1 1 6.4 1 13s5.4 12 12 12 12-5.4 12-12S19.6 1 13 1Z"
      />
      <path
        stroke="#183153"
        strokeMiterlimit={10}
        strokeWidth={0.5}
        d="M20 13v1c0 .6-.4 1-1 1h-4v4c0 .6-.4 1-1 1h-1c-.6 0-1-.4-1-1v-4H7c-.6 0-1-.4-1-1v-1.1c0-.6.5-1 1-1l5 .1V7c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v5h4c.6 0 1 .5 1 1Z"
      />
    </svg>
  );
}

const Memo = memo(SvgPlusRing);
export default Memo;
