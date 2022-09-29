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

function SvgMinus({
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
        d="M0 12c0 6.6 5.4 12 12 12s12-5.4 12-12S18.6 0 12 0C5.3 0 0 5.4 0 12Zm21 0c0 1.1-1 2-2.3 2H5.2c-1.2 0-2.3-.9-2.3-2s1-2 2.3-2h13.5c1.3 0 2.3.9 2.3 2Z"
      />
    </svg>
  );
}

const Memo = memo(SvgMinus);
export default Memo;
