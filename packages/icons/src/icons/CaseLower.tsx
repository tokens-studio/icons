import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCaseLower = ({
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
      d="M10.5 11V17M13.5 8V17M10.5 14C10.5 15.6569 9.15685 17 7.5 17C5.84315 17 4.5 15.6569 4.5 14C4.5 12.3431 5.84315 11 7.5 11C9.15685 11 10.5 12.3431 10.5 14ZM19.5 14C19.5 15.6569 18.1569 17 16.5 17C14.8431 17 13.5 15.6569 13.5 14C13.5 12.3431 14.8431 11 16.5 11C18.1569 11 19.5 12.3431 19.5 14Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgCaseLower;
