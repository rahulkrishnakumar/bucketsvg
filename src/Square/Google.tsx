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

function SvgGoogle({
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
        d="M19.253 10.968c.092.491.142 1.005.142 1.542 0 4.196-2.808 7.18-7.05 7.18A7.343 7.343 0 0 1 5.559 9.534 7.343 7.343 0 0 1 12.345 5c1.983 0 3.64.73 4.912 1.915l-2.07 2.07V8.98c-.771-.734-1.75-1.111-2.842-1.111-2.423 0-4.393 2.047-4.393 4.472 0 2.423 1.97 4.475 4.393 4.475 2.199 0 3.696-1.257 4.003-2.984h-4.003v-2.864h6.91-.002Z"
      />
    </svg>
  );
}

const Memo = memo(SvgGoogle);
export default Memo;
