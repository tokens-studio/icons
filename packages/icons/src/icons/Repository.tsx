import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgRepository = ({
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
			d='M2.66669 12.6667V3.33333C2.66669 2.59695 3.26364 2 4.00002 2H12.9334C13.1543 2 13.3334 2.17909 13.3334 2.4V11.1429'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M10 11.3334V14.6667L11.6667 13.6L13.3333 14.6667V11.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path d='M4 11.3334H13.3333' stroke='currentColor' strokeLinecap='round' />
		<path
			d='M4.00002 11.3334C3.26364 11.3334 2.66669 11.9303 2.66669 12.6667C2.66669 13.4031 3.26364 14 4.00002 14H7.66669'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgRepository;
