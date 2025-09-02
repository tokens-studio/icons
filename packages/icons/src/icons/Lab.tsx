import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLab = ({
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
      d="M5.38843 15L9.00948 7.5193V2H15.0141V7.5193L18.623 15M5.38843 15L3.13725 19.6504C2.74349 20.4639 3.08372 21.4425 3.89717 21.8363C4.11944 21.9439 4.36318 21.9998 4.61013 21.9998H19.3938C20.2975 21.9998 21.0301 21.2671 21.0301 20.3634C21.0301 20.1172 20.9746 19.8742 20.8676 19.6524L18.623 15M5.38843 15C5.38843 15 9.00005 17.4998 12 14.9998C15 12.4998 18.623 15 18.623 15"
      stroke="currentColor"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgLab;
