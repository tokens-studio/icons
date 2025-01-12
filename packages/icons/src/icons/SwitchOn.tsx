import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSwitchOn = ({
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
			d='M11.3333 8.66659C11.7015 8.66659 12 8.36812 12 7.99992C12 7.63172 11.7015 7.33325 11.3333 7.33325C10.9651 7.33325 10.6667 7.63172 10.6667 7.99992C10.6667 8.36812 10.9651 8.66659 11.3333 8.66659Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3333 11.3334H4.66668C2.82573 11.3334 1.33334 9.84101 1.33334 8.00008C1.33334 6.15913 2.82573 4.66675 4.66668 4.66675H11.3333C13.1743 4.66675 14.6667 6.15913 14.6667 8.00008C14.6667 9.84101 13.1743 11.3334 11.3333 11.3334Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgSwitchOn;
