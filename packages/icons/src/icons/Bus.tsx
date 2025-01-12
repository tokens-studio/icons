import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBus = ({
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
			d='M4.66669 10.6733L4.67335 10.6659'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3333 10.6733L11.34 10.6659'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 8H14V12.6667C14 13.0349 13.7015 13.3333 13.3333 13.3333H2.66667C2.29848 13.3333 2 13.0349 2 12.6667V8Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 5.33334V4.00001C14 2.52725 12.8061 1.33334 11.3333 1.33334H4.66667C3.19391 1.33334 2 2.52725 2 4.00001V5.33334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66669 5.33334H11.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3 13.3333V14.6C3 14.8209 3.17909 15 3.4 15H5.26667C5.48758 15 5.66667 14.8209 5.66667 14.6V13.3333'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M10.3333 13.3333V14.6C10.3333 14.8209 10.5124 15 10.7333 15H12.6C12.8209 15 13 14.8209 13 14.6V13.3333'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgBus;
