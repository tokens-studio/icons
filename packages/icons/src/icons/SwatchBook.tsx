import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSwatchBook = ({
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
      d="M7 21C8.06087 21 9.07828 20.5786 9.82843 19.8284C10.5786 19.0783 11 18.0609 11 17V5C11 4.46957 10.7893 3.96086 10.4142 3.58579C10.0391 3.21071 9.53043 3 9 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V17C3 18.0609 3.42143 19.0783 4.17157 19.8284C4.92172 20.5786 5.93913 21 7 21ZM7 21L18.9994 21.0005C19.5299 21.0005 20.0386 20.7898 20.4137 20.4147C20.7887 20.0396 20.9994 19.5309 20.9994 19.0005V15.0005C20.9994 14.4701 20.7887 13.9613 20.4137 13.5863C20.0386 13.2112 19.5299 13.0005 18.9994 13.0005H16.6994M6.99944 16.9995H7.00944M11.0005 8.00102L13.3005 5.70102C13.5238 5.47694 13.7892 5.29921 14.0814 5.17807C14.3736 5.05692 14.6869 4.99475 15.0033 4.99512C15.3196 4.99549 15.6328 5.0584 15.9248 5.18023C16.2167 5.30207 16.4817 5.48041 16.7045 5.70502L18.6005 7.60102C18.8311 7.82283 19.015 8.08851 19.1414 8.38243C19.2678 8.67636 19.3342 8.9926 19.3366 9.31255C19.339 9.6325 19.2775 9.9497 19.1555 10.2455C19.0335 10.5413 18.8537 10.8097 18.6265 11.035L9.90046 19.801"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSwatchBook;
