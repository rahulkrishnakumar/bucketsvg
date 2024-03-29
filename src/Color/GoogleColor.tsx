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

function SvgGoogleColor({
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
        fill="#FBBB00"
        d="m6.432 14.086-.696 2.6-2.544.053A9.955 9.955 0 0 1 2 12c0-1.658.403-3.222 1.118-4.599l2.266.415.992 2.252A5.944 5.944 0 0 0 6.056 12c0 .734.132 1.437.376 2.086Z"
      />
      <path
        fill="#518EF8"
        d="M21.825 10.132a10.018 10.018 0 0 1-.044 3.956 9.998 9.998 0 0 1-3.52 5.71h-.001l-2.853-.146-.404-2.52a5.96 5.96 0 0 0 2.564-3.044H12.22v-3.956h9.605Z"
      />
      <path
        fill="#28B446"
        d="M18.26 19.798A9.957 9.957 0 0 1 12 22a9.999 9.999 0 0 1-8.808-5.261l3.24-2.653a5.946 5.946 0 0 0 8.57 3.045l3.258 2.667Z"
      />
      <path
        fill="#F14336"
        d="m18.383 4.302-3.24 2.652a5.948 5.948 0 0 0-8.767 3.114L3.12 7.401A9.998 9.998 0 0 1 12 2c2.426 0 4.651.864 6.383 2.302Z"
      />
    </svg>
  );
}

const Memo = memo(SvgGoogleColor);
export default Memo;
