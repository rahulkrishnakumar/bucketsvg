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
      <path
        stroke="#183153"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.27 5.525a.75.75 0 0 1 .608 1.16A8.528 8.528 0 0 1 20.12 8.64v.134c0 5.358-4.07 11.555-11.56 11.555M21.27 5.525 8.56 19.58M21.27 5.525c.08-.17.148-.347.205-.529a.75.75 0 0 0-1.096-.872 7.045 7.045 0 0 1-1.796.747 4.526 4.526 0 0 0-7.573 3.486v.03a10.04 10.04 0 0 1-6.403-3.61.75.75 0 0 0-1.232.099 4.52 4.52 0 0 0-.146 4.235.75.75 0 0 0-.479.699v.05h.722l-.338.605c.148.082.3.156.454.22a3.785 3.785 0 0 0 1.457 2.24 2.382 2.382 0 0 1-.064-.014.75.75 0 0 0-.767.299m17.057-7.685L3.774 12.743c.136.167.283.323.44.467m4.347 7.12H8.56v-.75m0 .75h.002l-.002-.75m0 .75a11.32 11.32 0 0 1-6.22-1.847.75.75 0 0 1 .51-1.371c.264.036.53.052.795.048h.012a6.875 6.875 0 0 0 2.783-.58m2.12 3a10.569 10.569 0 0 1-4.37-.936c-.177.011-.354.016-.531.016a6.863 6.863 0 0 1-1.01-.062l.101-.743.41-.628c.161.105.324.205.49.3l.006.004c.22.126.444.243.672.351a7.624 7.624 0 0 0 3.094-.955 4.534 4.534 0 0 1-.982-.347m0 0c.3-.132.591-.285.87-.46a3.78 3.78 0 0 1-2.12-1.665 4.19 4.19 0 0 1-.52-.076l.148-.7a4.523 4.523 0 0 1-.604-.468m2.226 3.369a4.53 4.53 0 0 1-2.33-2.71.75.75 0 0 1 .104-.66m1.438.508c.302-.008.602-.053.893-.133l-1.72.06.715-.225.005.013v.002c.031.096.067.191.107.284Zm-2-3.908H3.5l-.028.05.18-.05Z"
      />
    </svg>
  );
}

const Memo = memo(SvgTwitter);
export default Memo;
