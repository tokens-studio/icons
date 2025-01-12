import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSwitchOff = ({
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
			d='M4.66667 8.66659C5.03485 8.66659 5.33333 8.36812 5.33333 7.99992C5.33333 7.63172 5.03485 7.33325 4.66667 7.33325C4.29848 7.33325 4 7.63172 4 7.99992C4 8.36812 4.29848 8.66659 4.66667 8.66659Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3333 11.3334H4.66666C2.82571 11.3334 1.33333 9.84101 1.33333 8.00008C1.33333 6.15913 2.82571 4.66675 4.66666 4.66675H11.3333C13.1743 4.66675 14.6667 6.15913 14.6667 8.00008C14.6667 9.84101 13.1743 11.3334 11.3333 11.3334Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgSwitchOff;
