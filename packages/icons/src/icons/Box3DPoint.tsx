import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBox3DPoint = ({
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
			d='M1.99992 12C2.36811 12 2.66659 11.7015 2.66659 11.3333C2.66659 10.9651 2.36811 10.6667 1.99992 10.6667C1.63173 10.6667 1.33325 10.9651 1.33325 11.3333C1.33325 11.7015 1.63173 12 1.99992 12Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 4.90204V11.098C14 11.2433 13.9213 11.3771 13.7943 11.4477L8.19428 14.5587C8.07348 14.6259 7.92655 14.6259 7.80575 14.5587L2.20575 11.4477C2.07877 11.3771 2.00001 11.2433 2.00001 11.098L2 4.90204C2 4.75677 2.07876 4.62293 2.20575 4.55238L7.80575 1.44127C7.92655 1.37415 8.07348 1.37415 8.19428 1.44127L13.7943 4.55238C13.9212 4.62293 14 4.75677 14 4.90204Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.35229 4.86243L7.80574 7.89214C7.92654 7.95921 8.07347 7.95921 8.19427 7.89214L13.6667 4.8519'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 14V8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBox3DPoint;
