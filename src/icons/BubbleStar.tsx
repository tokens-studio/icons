import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBubbleStar = ({
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
			d='m11.537 2.742.606-1.285a.208.208 0 0 1 .38 0l.607 1.285 1.355.208c.174.026.243.25.117.378l-.98 1 .231 1.412c.03.181-.152.32-.308.234l-1.212-.667-1.212.667c-.155.086-.337-.053-.308-.234l.232-1.412-.98-1c-.127-.128-.057-.352.117-.378z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8.667 1.366a6.667 6.667 0 0 0-6.441 9.967l-.56 3 3-.558a6.667 6.667 0 0 0 9.967-6.441'
		/>
	</svg>
);
export default SvgBubbleStar;
