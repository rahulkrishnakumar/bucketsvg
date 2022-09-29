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
        stroke="#183153"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={1.125}
        d="M20.1 14.3H3.9c-.5 0-.9-.4-.9-.9v-2.7c0-.5.4-.9.9-.9h16.2c.5 0 .9.4.9.9v2.7c0 .4-.4.9-.9.9Z"
      />
    </svg>
  );
}

const Memo = memo(SvgMinus);
export default Memo;
