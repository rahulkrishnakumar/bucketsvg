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
        fill="#183153"
        d="M12 .6C18.3.6 23.4 5.7 23.4 12c0 6.3-5.1 11.4-11.4 11.4C5.7 23.4.6 18.3.6 12 .6 5.7 5.7.6 12 .6Zm0-.6C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0Z"
      />
      <path
        stroke="#183153"
        strokeMiterlimit={10}
        strokeWidth={0.6}
        d="M18.1 13.5H5.9c-.5 0-.9-.4-.9-.9v-1.2c0-.5.4-.9.9-.9h12.2c.5 0 .9.4.9.9v1.2c0 .5-.4.9-.9.9Z"
      />
    </svg>
  );
}

const Memo = memo(SvgMinusRing);
export default Memo;
