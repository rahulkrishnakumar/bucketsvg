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

function SvgPlusRingNormal({
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
        d="M12 1c6.1 0 11 4.9 11 11s-4.9 11-11 11S1 18.1 1 12 6 1 12 1Zm0-1C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12c0-6.7-5.4-12-12-12Z"
      />
      <path
        stroke="#183153"
        d="M19.3 11.6c0 .5-.5 1-1 1h-5V18c0 .5-.5 1-1 1s-1-.5-1-1v-5.4h-5c-.5 0-1-.5-1-1s.5-1 1-1h5V6c0-.6.5-1 1-1s1 .4 1 1v4.6h5c.5 0 1 .4 1 1Z"
      />
    </svg>
  );
}

const Memo = memo(SvgPlusRingNormal);
export default Memo;
