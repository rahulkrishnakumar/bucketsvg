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

function SvgMinusRingNormal({
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
        d="M23 1v22H1V1h22Zm0-1H1C.4 0 0 .4 0 1v22c0 .6.4 1 1 1h22c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Z"
      />
      <path
        fill="#183153"
        stroke="#183153"
        d="M18 13H6c-.6 0-1-.4-1-1s.4-1 1-1h12c.6 0 1 .4 1 1 0 .5-.4 1-1 1Z"
      />
    </svg>
  );
}

const Memo = memo(SvgMinusRingNormal);
export default Memo;
