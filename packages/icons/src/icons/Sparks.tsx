import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSparks = ({
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
			d='M5.33334 9.99992C8.58314 9.99992 10 8.63259 10 5.33325C10 8.63259 11.4069 9.99992 14.6667 9.99992C11.4069 9.99992 10 11.4069 10 14.6666C10 11.4069 8.58314 9.99992 5.33334 9.99992Z'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33334 4.33325C3.42252 4.33325 4.33334 3.45427 4.33334 1.33325C4.33334 3.45427 5.2378 4.33325 7.33334 4.33325C5.2378 4.33325 4.33334 5.23771 4.33334 7.33325C4.33334 5.23771 3.42252 4.33325 1.33334 4.33325Z'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSparks;
