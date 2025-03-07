import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgArc3D = ({
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
			d='M15.6666 10.6667C15.6666 6.9848 12.6818 4 8.99998 4C5.31808 4 2.33331 6.9848 2.33331 10.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.33335 11.3333C2.70154 11.3333 3.00002 11.0349 3.00002 10.6667C3.00002 10.2985 2.70154 10 2.33335 10C1.96517 10 1.66669 10.2985 1.66669 10.6667C1.66669 11.0349 1.96517 11.3333 2.33335 11.3333Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M15.6667 11.3333C16.0349 11.3333 16.3333 11.0349 16.3333 10.6667C16.3333 10.2985 16.0349 10 15.6667 10C15.2985 10 15 10.2985 15 10.6667C15 11.0349 15.2985 11.3333 15.6667 11.3333Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgArc3D;
