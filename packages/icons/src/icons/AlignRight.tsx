import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlignRight = ({
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
      d="M20 21V3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.5 15.75V16.25C4.5 16.6642 4.83579 17 5.25 17H15.25C15.6642 17 16 16.6642 16 16.25V15.75M4.5 15.75V15.25C4.5 14.8358 4.83579 14.5 5.25 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25V15.75M4.5 15.75H16M10.5 8.25V8.75C10.5 9.16421 10.8358 9.5 11.25 9.5H15.25C15.6642 9.5 16 9.16421 16 8.75V8.25M10.5 8.25V7.75C10.5 7.33579 10.8358 7 11.25 7H15.25C15.6642 7 16 7.33579 16 7.75V8.25M10.5 8.25H16"
      stroke="currentColor"
    />
  </svg>
);
export default SvgAlignRight;
