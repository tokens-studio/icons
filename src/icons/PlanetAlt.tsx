import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPlanetAlt = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={16}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M8 13.333A5.333 5.333 0 1 0 8 2.667a5.333 5.333 0 0 0 0 10.666Z'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M13.208 8.66c1.209 1.007 1.836 1.909 1.575 2.434-.488.978-3.87.28-7.556-1.557C3.542 7.699.95 5.417 1.437 4.44c.26-.524 1.354-.567 2.88-.21'
		/>
	</svg>
);
export default SvgPlanetAlt;
