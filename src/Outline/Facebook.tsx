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
          fill="#183153"
          d="M12.816 24h3.741v-9.297h3.12l.468-3.621h-3.588V8.769c0-1.05.291-1.764 1.794-1.764h1.92V3.768c-.333-.045-1.47-.144-2.796-.144-2.766 0-4.659 1.689-4.659 4.788v2.67H9.687v3.624h3.129V24Z"
        />
      </g>
      <rect
        width={24}
        height={24}
        stroke="#183153"
        strokeWidth={3}
        mask="url(#path-1-inside-1_18_229)"
        rx={1}
      />
      <defs>
        <clipPath id="a">
          <rect width={24} height={24} fill="#fff" rx={1} />
        </clipPath>
      </defs>
    </svg>
  );
}

const Memo = memo(SvgFacebook);
export default Memo;
