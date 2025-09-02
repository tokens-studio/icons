import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCheckboxMinusFilled = ({
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
      d="M17.8338 10.5L17.9871 10.5078C18.7434 10.5848 19.3338 11.2234 19.3338 12C19.3338 12.7766 18.7434 13.4152 17.9871 13.4922L17.8338 13.5H6.16681C5.33838 13.5 4.66681 12.8284 4.66681 12C4.66681 11.1716 5.33838 10.5 6.16681 10.5H17.8338Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCheckboxMinusFilled;
