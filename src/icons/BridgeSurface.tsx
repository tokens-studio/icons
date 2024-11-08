import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBridgeSurface = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={17}
		height={17}
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
			d='M2 9c0 2.667 1.333 6 5.333 6M6.667 5C6.667 7.667 8 11 12 11M2 6.667V5.333M6.667 3V1.667M2 9l4.667-4M7.333 15 12 11M9.667 15H11M14 11h1.333'
		/>
	</svg>
);
export default SvgBridgeSurface;
