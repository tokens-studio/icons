import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCaseUppper = ({
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
      d="M4 12.9999H10M2 16.9999L6.27171 7.60219C6.50308 7.09318 6.61876 6.83867 6.77907 6.75971C6.91837 6.6911 7.08163 6.6911 7.22093 6.75971C7.38124 6.83867 7.49692 7.09318 7.72829 7.60219L12 16.9999M15 12H18.5C19.8807 12 21 10.8807 21 9.5C21 8.11929 19.8807 7 18.5 7H15V12ZM15 12H19.5C20.8807 12 22 13.1193 22 14.5C22 15.8807 20.8807 17 19.5 17H15V12Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgCaseUppper;
