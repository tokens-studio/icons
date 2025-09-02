import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSpinner = ({
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
      opacity={0.2}
      d="M12 21.9999C17.5228 21.9999 22 17.5228 22 11.9999C22 6.47709 17.5228 1.99994 12 1.99994C6.47715 1.99994 2 6.47709 2 11.9999C2 17.5228 6.47715 21.9999 12 21.9999Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.3969 15.4201C21.9367 13.9372 22.1178 12.3476 21.9255 10.7812C21.7331 9.2149 21.1728 7.71632 20.2904 6.40801C19.4079 5.0997 18.2283 4.01882 16.8481 3.25374C15.4679 2.48866 13.9261 2.06111 12.349 2.00603"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSpinner;
