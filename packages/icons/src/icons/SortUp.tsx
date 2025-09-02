import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSortUp = ({
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
      d="M18.9999 14.4999V4.49994M18.9999 4.49994L21.9999 7.49994M18.9999 4.49994L15.9999 7.49994M4.5 18.9999H18.5M4.5 14.4999H14M4.5 9.99994H11M4.5 5.49994H8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSortUp;
