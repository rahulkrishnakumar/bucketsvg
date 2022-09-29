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
      viewBox="0 0 24 24"
      width={size}
      height={size}
      style={mergedStyle}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="#CFCFCF"
        d="M23 24H1c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1h22c.6 0 1 .4 1 1v22c0 .6-.4 1-1 1Z"
      />
      <path
        fill="#FF0E46"
        d="M18 11.2h-4.9V5.9c0-.5-.4-1-1-1-.5 0-1 .5-1 1v5.3H6c-.6 0-1 .5-1 1 0 .6.4 1 1 1h5.1v4.7c0 .6.5 1 1 1 .6 0 1-.4 1-1v-4.7H18c.5 0 1-.4 1-1s-.5-1-1-1Z"
      />
    </svg>
  );
}

const Memo = memo(SvgPlusNormal);
export default Memo;
