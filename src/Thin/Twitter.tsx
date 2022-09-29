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
        strokeWidth={0.5}
        d="M20.043 6.448a7.683 7.683 0 0 0 1.104-.4.25.25 0 0 1 .313.363A8.029 8.029 0 0 1 19.62 8.4v.376c0 5.143-3.904 11.055-11.06 11.055M20.043 6.448 8.56 19.58M20.043 6.448c.435-.45.764-.997.955-1.603a.25.25 0 0 0-.365-.29 7.545 7.545 0 0 1-2.201.866 4.025 4.025 0 0 0-6.922 2.931c-.003.2.011.4.043.597a10.54 10.54 0 0 1-7.334-3.857.25.25 0 0 0-.41.033 4.02 4.02 0 0 0 .574 4.78 3.46 3.46 0 0 1-.761-.313.25.25 0 0 0-.372.218v.05h.222l-.094.168c.043.024.085.047.129.069l16.536-3.65ZM8.56 19.83v-.25m0 .25s0 0 0 0v-.25m0 .25a10.82 10.82 0 0 1-5.947-1.766.25.25 0 0 1 .17-.457c.288.04.578.057.869.053h.004a7.375 7.375 0 0 0 4.034-1.188m.87 3.108a10.57 10.57 0 0 1-5.33-1.429 6.376 6.376 0 0 1-.514-.048l.034-.248.137-.21c.137.09.276.177.417.26.117.005.234.007.351.005a7.625 7.625 0 0 0 4.405-1.387 4.022 4.022 0 0 1-.37-.051m0 0c.103-.067.203-.136.302-.207l-2.004-2.571a4.025 4.025 0 0 1-.443-.18s0 0 0 0l-.09-.045a3.197 3.197 0 0 1-.578-.069.25.25 0 0 0-.29.32 4.03 4.03 0 0 0 3.103 2.752ZM3.5 9.81l-.028.05.028-.05Z"
      />
    </svg>
  );
}

const Memo = memo(SvgTwitter);
export default Memo;
