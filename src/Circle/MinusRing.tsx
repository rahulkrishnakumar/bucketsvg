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
      <g clipPath="url(#a)">
        <path
          fill="#183153"
          d="M11.984.013c-9.4 0-16.3 10.9-8.8 20.7.1.1.1.2.2.2 9.9 7.3 20.6.5 20.6-8.9 0-6.6-5.4-12-12-12Zm7 12.6c0 .5-.4.9-.9.9h-12.2c-.1 0-.3 0-.4-.1-.3-.2-.5-.5-.5-.8v-1.1c0-.6.4-1 1-1h12.4c.4.1.7.5.7.9v1.2h-.1Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const Memo = memo(SvgMinusRing);
export default Memo;
