import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgString = ({
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
      d="M9.99994 9V15M14.0001 6.99994V14.9999M22.0001 17.0001V18.0001C22.0001 18.5001 21.5001 19.0001 21.0001 19.0001H3.00006C2.50006 19.0001 2.00006 18.5001 2.00006 18.0001V17.0001M9.99994 12C9.99994 13.6569 8.65679 15 6.99994 15C5.34308 15 3.99994 13.6569 3.99994 12C3.99994 10.3431 5.34308 9 6.99994 9C8.65679 9 9.99994 10.3431 9.99994 12ZM20.0001 12C20.0001 13.6569 18.6569 15 17.0001 15C15.3432 15 14.0001 13.6569 14.0001 12C14.0001 10.3431 15.3432 9 17.0001 9C18.6569 9 20.0001 10.3431 20.0001 12Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgString;
