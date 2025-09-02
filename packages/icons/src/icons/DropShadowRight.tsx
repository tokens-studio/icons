import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDropShadowRight = ({
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
      opacity={0.4}
      d="M17 20H20C20.5464 20 21.0587 19.8539 21.5 19.5987M17 4H20C20.5464 4 21.0587 4.14609 21.5 4.40135M21.5 19.5987C22.3967 19.0799 23 18.1104 23 17V7C23 5.88958 22.3967 4.92006 21.5 4.40135M21.5 19.5987V4.40135"
      stroke="currentColor"
      strokeLinejoin="round"
    />
    <path
      d="M4 7C4 5.34315 5.34315 4 7 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7Z"
      stroke="currentColor"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgDropShadowRight;
