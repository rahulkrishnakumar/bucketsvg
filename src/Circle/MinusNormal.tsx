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
        fill="#183153"
        fillRule="evenodd"
        d="M0 12c0 6.6 5.4 12 12 12s12-5.4 12-12S18.6 0 12 0 0 5.4 0 12Zm18 1c.5 0 1-.4 1-1s-.5-1-1-1H6c-.6 0-1 .5-1 1 0 .6.4 1 1 1h12Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const Memo = memo(SvgMinusNormal);
export default Memo;
