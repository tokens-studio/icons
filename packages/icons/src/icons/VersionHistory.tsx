import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVersionHistory = ({
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
      d="M11.9999 6.99945V11.9995L15.9999 13.9995M3 12C3 14.1429 3.76463 16.2155 5.15635 17.845C6.54807 19.4745 8.47554 20.554 10.5921 20.8892C12.7086 21.2244 14.8753 20.7935 16.7025 19.6738C18.5296 18.5541 19.8973 16.8192 20.5595 14.7812C21.2217 12.7431 21.135 10.5357 20.3149 8.55586C19.4949 6.57605 17.9953 4.95382 16.0859 3.98095C14.1766 3.00808 11.9827 2.74843 9.89899 3.24868C7.81527 3.74894 5.97843 4.97628 4.71885 6.70994M3.91441 4.25008L3.91399 7.57779L7.24016 7.57821"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgVersionHistory;
