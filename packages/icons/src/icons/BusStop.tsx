import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBusStop = ({
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
			d='M10.6667 10.6733L10.6734 10.6659'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4 10.6733L4.00667 10.6659'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.3333 14.6667V10V5.33334M13.3333 5.33334H12V1.33334H14.6667V5.33334H13.3333Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6666 13.3333H1.73331C1.5124 13.3333 1.33331 13.1543 1.33331 12.9333V8.4C1.33331 8.17907 1.5124 8 1.73331 8H10.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33331 5.33334H3.99998M9.33331 1.33334H3.99998C2.52722 1.33334 1.33331 2.52725 1.33331 4.00001V5.33334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.33331 13.3333V14.6C2.33331 14.8209 2.5124 15 2.73331 15H4.59998C4.82089 15 4.99998 14.8209 4.99998 14.6V13.3333'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M9.66669 13.3333V14.6C9.66669 14.8209 9.84575 15 10.0667 15H10.6667'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgBusStop;
