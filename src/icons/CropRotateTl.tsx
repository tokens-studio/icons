import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCropRotateTl = ({
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
			d='M6.667 2.667h-2A2.667 2.667 0 0 0 2 5.333V8'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m5 1 1.667 1.667L5 4.333M13.333 11.333v-4a.667.667 0 0 0-.666-.666h-4M5.333 6.667h1.334M13.333 14.667v-1.334M6.667 5.333v7.334c0 .368.298.666.666.666h7.334'
		/>
	</svg>
);
export default SvgCropRotateTl;
