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
        fill="#CFCFCF"
        d="M22.3 0h-20C1.2 0 0 .6 0 1.7v20C0 22.8 1.2 24 2.3 24h20c1.1 0 1.7-1.2 1.7-2.3v-20C24 .6 23.4 0 22.3 0Zm-4 14h-12c-1.1 0-2-1-2-2.2 0-.5.2-1 .6-1.3.4-.4.9-.5 1.4-.5h12c1.1 0 2 .9 2 2s-.9 2-2 2Z"
      />
      <path
        fill="#FF0E46"
        d="M20.3 12c0 1.1-.9 2-2 2h-12c-1.1 0-2-1-2-2.2 0-.5.2-1 .6-1.3.4-.4.9-.5 1.4-.5h12c1.1 0 2 .9 2 2Z"
      />
    </svg>
  );
}

const Memo = memo(SvgMinus);
export default Memo;
