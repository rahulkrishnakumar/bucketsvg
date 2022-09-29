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
      <rect width={24} height={24} fill="#183153" rx={1} />
      <path
        fill="#fff"
        d="M19.097 7.36a5.793 5.793 0 0 1-1.66.454 2.9 2.9 0 0 0 1.27-1.6 5.774 5.774 0 0 1-1.836.701 2.893 2.893 0 0 0-4.928 2.64 8.213 8.213 0 0 1-5.961-3.023 2.89 2.89 0 0 0-.05 2.819c.224.42.549.778.945 1.042a2.884 2.884 0 0 1-1.31-.362v.038a2.893 2.893 0 0 0 2.32 2.836 2.913 2.913 0 0 1-1.306.05 2.894 2.894 0 0 0 2.702 2.007A5.804 5.804 0 0 1 5 16.161a8.18 8.18 0 0 0 4.433 1.299c5.32 0 8.23-4.407 8.23-8.229 0-.124-.004-.25-.01-.374a5.88 5.88 0 0 0 1.443-1.496l.001-.002Z"
      />
    </svg>
  );
}

const Memo = memo(SvgTwitter);
export default Memo;
