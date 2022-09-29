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

function SvgMinusRing({
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
        d="M18.1 13.5H5.9c-.5 0-.9-.4-.9-.9v-1.2c0-.5.4-.9.9-.9h12.2c.5 0 .9.4.9.9v1.2c0 .5-.4.9-.9.9Z"
      />
    </svg>
  );
}

const Memo = memo(SvgMinusRing);
export default Memo;
