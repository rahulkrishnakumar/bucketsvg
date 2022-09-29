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
        d="M23 23.5H1c-.186 0-.303-.06-.371-.129C.559 23.303.5 23.186.5 23V1C.5.814.56.697.629.629.697.559.814.5 1 .5h22c.186 0 .303.06.371.129.07.068.129.185.129.371v22c0 .186-.06.303-.129.371-.068.07-.185.129-.371.129Z"
      />
      <path
        fill="#183153"
        d="M18.1 13.5H5.9c-.5 0-.9-.4-.9-.9v-1.2c0-.5.4-.9.9-.9h12.2c.5 0 .9.4.9.9v1.2c0 .5-.4.9-.9.9Z"
      />
    </svg>
  );
}

const Memo = memo(SvgMinusRing);
export default Memo;
