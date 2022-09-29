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

function SvgPlus({
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
        strokeMiterlimit={10}
        d="M20 10h-6V4c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v6H4c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h6v6c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-6h6c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1Z"
      />
    </svg>
  );
}

const Memo = memo(SvgPlus);
export default Memo;
