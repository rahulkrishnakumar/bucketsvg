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
        fill="#183153"
        fillRule="evenodd"
        d="M0 12c0 6.6 5.4 12 12 12 6.7 0 12-5.4 12-12S18.6 0 12 0 0 5.4 0 12Zm13.1-6v5H18c.5 0 1 .4 1 1s-.5 1-1 1h-4.9v5c0 .6-.4 1-1 1-.5 0-1-.4-1-1v-5H6c-.6 0-1-.4-1-1 0-.5.4-1 1-1h5.1V6c0-.6.5-1 1-1 .6 0 1 .5 1 1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const Memo = memo(SvgPlusNormal);
export default Memo;
