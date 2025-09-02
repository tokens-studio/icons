import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGitCommitFilled = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.9 11C16.4367 8.71776 14.419 7 12 7C9.58104 7 7.56329 8.71776 7.10002 11H2.00018C1.4479 11 1.00018 11.4477 1.00018 12C1.00018 12.5523 1.4479 13 2.00018 13H7.10002C7.56329 15.2822 9.58104 17 12 17C14.419 17 16.4367 15.2822 16.9 13H22C22.5523 13 23 12.5523 23 12C23 11.4477 22.5523 11 22 11H16.9Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgGitCommitFilled;
