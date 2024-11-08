import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLanguage = ({
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
			d='M1.333 8a6.667 6.667 0 1 0 13.334 0A6.667 6.667 0 0 0 1.333 8'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8.667 1.366s2 2.634 2 6.634-2 6.634-2 6.634M7.333 14.634s-2-2.634-2-6.634 2-6.634 2-6.634M1.753 10.333h12.494M1.753 5.667h12.494'
		/>
	</svg>
);
export default SvgLanguage;
