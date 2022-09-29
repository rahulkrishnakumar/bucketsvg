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
        fill="#183153"
        fillRule="evenodd"
        d="M1 24h22c.6 0 1-.5 1-1V1c0-.6-.4-1-1-1H1C.4 0 0 .4 0 1v22c0 .6.4 1 1 1Zm12.7-13.7h5c.5 0 .8.4.8.8v1.7c0 .4-.3.8-.8.8h-5v5c0 .4-.3.8-.8.8h-1.7c-.4 0-.8-.3-.8-.8v-5h-5c-.4 0-.8-.3-.8-.8v-1.7c0-.4.3-.8.8-.8h5v-5c0-.4.3-.8.8-.8h1.7c.4 0 .8.3.8.8v5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const Memo = memo(SvgPlus);
export default Memo;
