import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMultiBubble = ({
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
			d='M5 14.667a3.667 3.667 0 1 0-3.176-1.834l-.307 1.65 1.65-.307a3.65 3.65 0 0 0 1.833.49'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10.188 11.932A5.3 5.3 0 0 0 12 11.286l2.4.447-.447-2.4A5.333 5.333 0 1 0 4.055 5.9'
		/>
	</svg>
);
export default SvgMultiBubble;
