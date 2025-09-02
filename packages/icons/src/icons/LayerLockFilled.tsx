import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLayerLockFilled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden={!title}
    strokeWidth={props.strokeWidth || 2 * (16 / (Number(props.width) || 16))}
    preserveAspectRatio="xMidYMid meet"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8V10H15V8ZM17 10C18.6569 10 20 11.3431 20 13V18C20 19.6569 18.6569 21 17 21H7C5.34315 21 4 19.6569 4 18V13C4 11.3431 5.34315 10 7 10V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgLayerLockFilled;
