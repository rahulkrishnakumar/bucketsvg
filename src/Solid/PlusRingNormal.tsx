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

function SvgPlusRingNormal({
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
        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Zm-13 6v-5H6c-.6 0-1-.4-1-1s.4-1 1-1h5V6c0-.6.4-1 1-1s1 .4 1 1v5h5c.6 0 1 .4 1 1 0 .5-.4 1-1 1h-5v5c0 .6-.4 1-1 1s-1-.4-1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const Memo = memo(SvgPlusRingNormal);
export default Memo;
