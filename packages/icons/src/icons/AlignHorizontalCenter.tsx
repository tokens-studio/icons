import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlignHorizontalCenter = ({
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
      d="M12 21V3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.25 15.75V16.25C4.25 16.6642 4.58579 17 5 17H19C19.4142 17 19.75 16.6642 19.75 16.25V15.75M4.25 15.75V15.25C4.25 14.8358 4.58579 14.5 5 14.5H19C19.4142 14.5 19.75 14.8358 19.75 15.25V15.75M4.25 15.75H19.75M8.25 8.25V8.75C8.25 9.16421 8.58579 9.5 9 9.5H15C15.4142 9.5 15.75 9.16421 15.75 8.75V8.25M8.25 8.25V7.75C8.25 7.33579 8.58579 7 9 7H15C15.4142 7 15.75 7.33579 15.75 7.75V8.25M8.25 8.25H15.75"
      stroke="currentColor"
    />
  </svg>
);
export default SvgAlignHorizontalCenter;
