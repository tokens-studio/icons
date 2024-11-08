import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLightBulb = ({
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
			d='M6 12h4M6.667 14h2.666M6 10c0-1.333-.333-1.667-1-2.333C4.335 7 4.017 6.325 4 5.333 3.97 3.3 5.335 2 8 2s4.033 1.3 4 3.333c-.015.992-.333 1.667-1 2.334-.666.666-1 1-1 2.333'
		/>
	</svg>
);
export default SvgLightBulb;
