import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLightBulbOn = ({
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
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M14 1.333 13.333 2M2 1.333 2.667 2M14 10.667 13.333 10M2 10.667 2.667 10M6 12h4M6.667 14h2.666M8 2C5.333 2 3.968 3.3 4 5.333c.016.992.333 1.667 1 2.334.667.666 1 1 1 2.333h4c0-1.333.333-1.667 1-2.333.666-.667.984-1.342 1-2.334C12.032 3.3 10.667 2 8 2'
		/>
	</svg>
);
export default SvgLightBulbOn;
