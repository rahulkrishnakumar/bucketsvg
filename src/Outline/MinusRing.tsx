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
        stroke="#183153"
        d="M.5 12C.5 5.676 5.676.5 12 .5S23.5 5.676 23.5 12 18.324 23.5 12 23.5.5 18.324.5 12Z"
      />
      <path
        stroke="#183153"
        strokeMiterlimit={10}
        d="M5.9 14h12.2c.5 0 .9-.4.9-.9v-1.2c0-.5-.4-.9-.9-.9H5.9c-.5 0-.9.4-.9.9v1.2c0 .5.4.9.9.9Z"
      />
    </svg>
  );
}

const Memo = memo(SvgMinusRing);
export default Memo;
