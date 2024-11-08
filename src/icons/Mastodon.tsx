import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMastodon = ({
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
			d='M4.667 9V6C4.667 4 8 4 8 6v2M11.333 9V6C11.333 4 8 4 8 6v2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M5.333 11.333c5 .667 8.667 0 8.667-2.666V6c0-3.667-2.667-4.333-4-4.333H6c-2 0-4.045.666-3.909 4.333.05 1.325.024 2.923.242 4.667.667 5.333 7 3.666 8 3.333v-1s-5.333 1-5-1.667'
		/>
	</svg>
);
export default SvgMastodon;
