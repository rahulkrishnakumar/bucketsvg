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
        stroke="#183153"
        d="M.5 12C.5 5.676 5.676.5 12 .5S23.5 5.676 23.5 12 18.324 23.5 12 23.5.5 18.324.5 12Z"
      />
      <path
        stroke="#183153"
        strokeMiterlimit={10}
        d="M19 12v1c0 .6-.4 1-1 1h-4v4c0 .6-.4 1-1 1h-1c-.6 0-1-.4-1-1v-4H6c-.6 0-1-.4-1-1v-1.1c0-.6.5-1 1-1l5 .1V6c0-.6.4-1 1-1h1c.6 0 1 .4 1 1v5h4c.6 0 1 .5 1 1Z"
      />
    </svg>
  );
}

const Memo = memo(SvgPlusRing);
export default Memo;
