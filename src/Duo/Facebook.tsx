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

function SvgFacebook({
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
          fill="#1877F2"
          d="M23.04 0H.96A.959.959 0 0 0 0 .96v22.08c0 .531.429.96.96.96h22.08c.531 0 .96-.429.96-.96V.96a.959.959 0 0 0-.96-.96Zm-2.772 7.005h-1.917c-1.503 0-1.794.714-1.794 1.764v2.313h3.588l-.468 3.621h-3.12V24h-3.741v-9.294H9.687v-3.624h3.129v-2.67c0-3.099 1.893-4.788 4.659-4.788 1.326 0 2.463.099 2.796.144v3.237h-.003Z"
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

const Memo = memo(SvgFacebook);
export default Memo;
