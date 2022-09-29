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
        stroke="#183153"
        d="M19 11.9c0 .5-.5 1-1 1h-5V18c0 .5-.5 1-1 1s-1-.5-1-1v-5.1H6c-.5 0-1-.5-1-1s.5-1 1-1h5V6c0-.6.5-1 1-1s1 .4 1 1v4.9h5c.5 0 1 .4 1 1Z"
      />
    </svg>
  );
}

const Memo = memo(SvgPlusNormal);
export default Memo;
