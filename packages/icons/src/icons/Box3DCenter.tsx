import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBox3DCenter = ({
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
			d='M8.00004 11.3333C8.36824 11.3333 8.66671 11.0349 8.66671 10.6667C8.66671 10.2985 8.36824 10 8.00004 10C7.63184 10 7.33337 10.2985 7.33337 10.6667C7.33337 11.0349 7.63184 11.3333 8.00004 11.3333Z'
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
			d='M13.6667 11.1481L8.19431 8.10786C8.07351 8.04079 7.92657 8.04079 7.80577 8.10786L2.33337 11.1481'
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
			d='M8 2V8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 13V14.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBox3DCenter;
