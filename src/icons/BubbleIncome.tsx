import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBubbleIncome = ({
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
			d='M14.667 3.333h-4m0 0 2-2m-2 2 2 2M8.667 1.366a6.667 6.667 0 0 0-6.441 9.967l-.56 3 3-.558a6.667 6.667 0 0 0 9.967-6.441'
		/>
	</svg>
);
export default SvgBubbleIncome;
