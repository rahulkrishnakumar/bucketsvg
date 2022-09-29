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

function SvgTwitter({
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
      <rect width={24} height={24} fill="#183153" rx={12} />
      <path
        fill="#fff"
        d="M18.867 8.24c-.473.21-.982.352-1.516.416.552-.33.964-.85 1.16-1.46a5.27 5.27 0 0 1-1.676.64 2.64 2.64 0 0 0-4.498 2.408 7.496 7.496 0 0 1-5.441-2.759 2.639 2.639 0 0 0-.045 2.574c.204.383.5.71.862.951a2.632 2.632 0 0 1-1.196-.33v.034a2.64 2.64 0 0 0 2.118 2.588 2.66 2.66 0 0 1-1.192.046 2.64 2.64 0 0 0 2.466 1.832A5.298 5.298 0 0 1 6 16.274a7.466 7.466 0 0 0 4.046 1.186c4.857 0 7.511-4.022 7.511-7.51 0-.114-.002-.229-.008-.342a5.366 5.366 0 0 0 1.317-1.366v-.001Z"
      />
    </svg>
  );
}

const Memo = memo(SvgTwitter);
export default Memo;
