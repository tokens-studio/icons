import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCropRotateTr = ({
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
			d='M13.333 6.667v-2A2.667 2.667 0 0 0 10.667 2H8'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m15 5-1.667 1.667L11.667 5M9.333 11.333v-4a.667.667 0 0 0-.666-.666h-4M1.333 6.667h1.334M9.333 14.667v-1.334M2.667 5.333v7.334c0 .368.298.666.666.666h7.334'
		/>
	</svg>
);
export default SvgCropRotateTr;
