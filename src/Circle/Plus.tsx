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

function SvgPlus({
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
        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Zm-10.4-1.7h5c.5 0 .9.4.8.8v1.7c0 .4-.3.8-.8.8h-5v5c0 .4-.3.8-.8.8h-1.7c-.4 0-.8-.3-.8-.8v-5h-5c-.4 0-.8-.3-.8-.8v-1.7c0-.4.3-.8.8-.8h5v-5c0-.4.3-.8.8-.8h1.7c.4 0 .8.3.8.8v5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const Memo = memo(SvgPlus);
export default Memo;
