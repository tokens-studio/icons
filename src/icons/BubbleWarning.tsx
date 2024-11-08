import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBubbleWarning = ({
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
			d='M12 1.333v2M12 6.007l.007-.008M8.667 1.366a6.667 6.667 0 0 0-6.441 9.967l-.56 3 3-.558a6.667 6.667 0 0 0 9.967-6.441'
		/>
	</svg>
);
export default SvgBubbleWarning;
