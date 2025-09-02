import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlignTop = ({
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
      opacity={0.5}
      d="M21 4H3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.25 19.5H8.75C9.16421 19.5 9.5 19.1642 9.5 18.75V8.75C9.5 8.33579 9.16421 8 8.75 8H8.25M8.25 19.5H7.75C7.33579 19.5 7 19.1642 7 18.75V8.75C7 8.33579 7.33579 8 7.75 8H8.25M8.25 19.5V8M15.75 13.5H16.25C16.6642 13.5 17 13.1642 17 12.75V8.75C17 8.33579 16.6642 8 16.25 8H15.75M15.75 13.5H15.25C14.8358 13.5 14.5 13.1642 14.5 12.75V8.75C14.5 8.33579 14.8358 8 15.25 8H15.75M15.75 13.5V8"
      stroke="currentColor"
    />
  </svg>
);
export default SvgAlignTop;
