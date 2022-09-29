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
        d="M18.95 14.5c.821 0 1.55-.587 1.55-1.5 0-.876-.69-1.5-1.433-1.5H7.05c-.854 0-1.55.719-1.55 1.5 0 .913.729 1.5 1.55 1.5h11.9Z"
      />
    </svg>
  );
}

const Memo = memo(SvgMinusNormal);
export default Memo;
