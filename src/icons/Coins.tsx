import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCoins = ({
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
			d='M10.667 8.667C8.826 8.667 7.333 7.92 7.333 7s1.493-1.667 3.334-1.667S14 6.08 14 7s-1.492 1.667-3.333 1.667M7.333 9.667c0 .92 1.493 1.666 3.334 1.666S14 10.587 14 9.667M2 6.333C2 7.253 3.492 8 5.333 8c.75 0 1.443-.124 2-.333M2 8.667c0 .92 1.492 1.666 3.333 1.666.75 0 1.443-.124 2-.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M2 3.667V11c0 .92 1.492 1.667 3.333 1.667.75 0 1.443-.124 2-.334M8.667 5.667v-2M7.333 7v5.333c0 .92 1.493 1.667 3.334 1.667S14 13.254 14 12.333V7'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M5.333 5.333C3.493 5.333 2 4.587 2 3.667S3.492 2 5.333 2s3.334.746 3.334 1.667c0 .92-1.493 1.666-3.334 1.666'
		/>
	</svg>
);
export default SvgCoins;
