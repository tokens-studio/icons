import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBatteryFull = ({
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
			d='M16.3334 6.66666V9.33332'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.66663 10.6667V5.33333C1.66663 4.59695 2.26358 4 2.99996 4H13C13.7364 4 14.3333 4.59695 14.3333 5.33333V10.6667C14.3333 11.4031 13.7364 12 13 12H2.99996C2.26358 12 1.66663 11.4031 1.66663 10.6667Z'
			stroke='currentColor'
		/>
		<path
			d='M3.66663 9.6V6.4C3.66663 6.17909 3.84571 6 4.06663 6H11.9333C12.1542 6 12.3333 6.17909 12.3333 6.4V9.6C12.3333 9.82093 12.1542 10 11.9333 10H4.06663C3.84571 10 3.66663 9.82093 3.66663 9.6Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgBatteryFull;
