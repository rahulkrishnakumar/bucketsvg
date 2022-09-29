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

function SvgMinusNormal({
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
        d="M19.1 14.75c.621 0 1.25-.496 1.25-1.25s-.629-1.25-1.25-1.25h-12c-.754 0-1.25.629-1.25 1.25 0 .357.12.674.348.902.228.228.545.348.902.348h12Z"
      />
    </svg>
  );
}

const Memo = memo(SvgMinusNormal);
export default Memo;
