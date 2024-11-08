import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFireFlame = ({
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
			d='M5.333 12c0 1.61 1.194 2 2.667 2 2.506 0 3.333-1.667 1.667-5C7.333 12 7 7.333 7.333 6c-1 2-2 3.878-2 6'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8 14c3.366 0 5.333-1.936 5.333-5.25S8 2 8 2 2.667 5.436 2.667 8.75 4.634 14 8 14'
		/>
	</svg>
);
export default SvgFireFlame;
