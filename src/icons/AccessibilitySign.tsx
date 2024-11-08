import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAccessibilitySign = ({
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
			d='M7.667 8.333 12.333 8l-1 4.333M7.667 8.333l3-3.333-2.334-1.667L6.667 5M12.333 4.333a1.333 1.333 0 1 1 0-2.666 1.333 1.333 0 0 1 0 2.666'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M3.666 8.333a3.333 3.333 0 0 1 5.056 4M2.487 10q-.151.476-.153 1a3.333 3.333 0 0 0 5 2.887'
		/>
	</svg>
);
export default SvgAccessibilitySign;
