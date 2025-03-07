import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPlanet = ({
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
			d='M8.00008 13.3333C10.9456 13.3333 13.3334 10.9455 13.3334 7.99996C13.3334 5.05444 10.9456 2.66663 8.00008 2.66663C5.05456 2.66663 2.66675 5.05444 2.66675 7.99996C2.66675 10.9455 5.05456 13.3333 8.00008 13.3333Z'
			stroke='currentColor'
		/>
		<path
			d='M11.6664 4.23219C13.1984 3.87307 14.2965 3.91468 14.5584 4.43997C15.0458 5.4174 12.4532 7.69936 8.7677 9.53682C5.08221 11.3744 1.6995 12.0716 1.21217 11.0942C0.950902 10.5702 1.57493 9.67109 2.77804 8.66669'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgPlanet;
