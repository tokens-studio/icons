import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgArc3DCenterPoint = ({
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
			d='M15.6666 10.6667C15.6666 6.9848 12.6818 4 8.99991 4C6.26619 4 3.91674 5.64546 2.888 8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeDasharray='3 3'
		/>
		<path
			d='M2.33335 11.3333C2.70154 11.3333 3.00002 11.0349 3.00002 10.6667C3.00002 10.2985 2.70154 10 2.33335 10C1.96517 10 1.66669 10.2985 1.66669 10.6667C1.66669 11.0349 1.96517 11.3333 2.33335 11.3333Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.33331 10.6667H8.99998'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.99998 11.3333C9.36818 11.3333 9.66665 11.0349 9.66665 10.6667C9.66665 10.2985 9.36818 10 8.99998 10C8.63178 10 8.33331 10.2985 8.33331 10.6667C8.33331 11.0349 8.63178 11.3333 8.99998 11.3333Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgArc3DCenterPoint;
