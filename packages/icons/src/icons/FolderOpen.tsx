import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFolderOpen = ({
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
      d="M19 10.5V9.7C19 8.5799 19 8.01984 18.782 7.59202C18.5903 7.21569 18.2843 6.90973 17.908 6.71799C17.4802 6.5 16.9201 6.5 15.8 6.5H12.8276L11.8845 4.76892C11.5634 4.12682 11.4029 3.80573 11.1634 3.57116C10.9516 3.36373 10.6963 3.20597 10.4161 3.10931C10.0992 3 9.74021 3 9.02229 3H5.2C4.0799 3 3.51984 3 3.09202 3.21799C2.71569 3.40973 2.40973 3.71569 2.21799 4.09202C2 4.51984 2 5.0799 2 6.2V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21H10.5H16.8406C17.9692 21 18.5336 21 19.0015 20.8016C19.4142 20.6265 19.7723 20.3437 20.0382 19.9827C20.3397 19.5735 20.4704 19.0245 20.7318 17.9265L21.7962 13.4559C22.0364 12.447 22.1565 11.9425 22.0305 11.5458C21.92 11.1981 21.6866 10.9025 21.3739 10.7145C21.0172 10.5 20.4986 10.5 19.4615 10.5H7.81032C7.1614 10.5 6.83694 10.5 6.56429 10.6114C6.32364 10.7096 6.11267 10.8688 5.95205 11.0732C5.77007 11.3047 5.68094 11.6167 5.50267 12.2407L3.35771 19.748"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgFolderOpen;
