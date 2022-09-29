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

function SvgPlusNormal({
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
        strokeWidth={0.5}
        d="M24 25H2c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1h22c.6 0 1 .4 1 1v22c0 .5-.5 1-1 1Z"
      />
      <path
        stroke="#183153"
        strokeWidth={0.5}
        d="M20.2 12.9c0 .6-.5 1-1 1h-5.4v5.2c0 .6-.4 1-1 1-.5 0-1-.4-1-1v-5.2H7.2c-.6 0-1-.4-1-1 0-.5.4-1 1-1h4.6V7.1c0-.5.5-1 1-1 .6 0 1 .5 1 1v4.8h5.4c.5 0 1 .4 1 1Z"
      />
    </svg>
  );
}

const Memo = memo(SvgPlusNormal);
export default Memo;
