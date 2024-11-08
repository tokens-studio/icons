import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCropRotateBl = ({
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
			d='M2.667 9.333v2A2.667 2.667 0 0 0 5.333 14H8'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m1 11 1.667-1.667L4.333 11M13.333 7.333v-4a.667.667 0 0 0-.666-.666h-4M5.333 2.667h1.334M13.333 10.667V9.333M6.667 1.333v7.334c0 .368.298.666.666.666h7.334'
		/>
	</svg>
);
export default SvgCropRotateBl;
