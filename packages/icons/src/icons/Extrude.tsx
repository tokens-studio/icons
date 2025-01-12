import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgExtrude = ({
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
			d='M14 8.23532V11.098C14 11.2433 13.9213 11.3771 13.7943 11.4477L8.19428 14.5587C8.07348 14.6259 7.92655 14.6259 7.80575 14.5587L2.20575 11.4477C2.07877 11.3771 2.00001 11.2433 2.00001 11.098L2 8.23532C2 8.09006 2.07876 7.95626 2.20575 7.88566L7.80575 4.77458C7.92655 4.70746 8.07348 4.70746 8.19428 4.77458L13.7943 7.88566C13.9212 7.95626 14 8.09006 14 8.23532Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.35229 8.19571L7.80574 11.2254C7.92654 11.2925 8.07347 11.2925 8.19427 11.2254L13.6667 8.18518'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 14.3333V11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.99998 7.99998V1.33331M7.99998 1.33331L9.66665 2.99998M7.99998 1.33331L6.33331 2.99998'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgExtrude;
