import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSelectPoint3D = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M7.99998 8.66671C8.36818 8.66671 8.66665 8.36824 8.66665 8.00004C8.66665 7.63184 8.36818 7.33337 7.99998 7.33337C7.63178 7.33337 7.33331 7.63184 7.33331 8.00004C7.33331 8.36824 7.63178 8.66671 7.99998 8.66671Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 4.90198V11.098C14 11.2432 13.9213 11.377 13.7943 11.4476L8.19428 14.5587C8.07348 14.6258 7.92655 14.6258 7.80575 14.5587L2.20575 11.4476C2.07877 11.377 2.00001 11.2432 2.00001 11.098L2 4.90198C2 4.75671 2.07876 4.62286 2.20575 4.55232L7.80575 1.4412C7.92655 1.37409 8.07348 1.37409 8.19428 1.4412L13.7943 4.55232C13.9212 4.62286 14 4.75671 14 4.90198Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSelectPoint3D;
