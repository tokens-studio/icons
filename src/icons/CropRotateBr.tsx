import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCropRotateBr = ({
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
			d='M9.333 13.333h2A2.667 2.667 0 0 0 14 10.667V8'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m11 15-1.667-1.667L11 11.667M9.333 7.333v-4a.667.667 0 0 0-.666-.666h-4M1.333 2.667h1.334M9.333 10.667V9.333M2.667 1.333v7.334c0 .368.298.666.666.666h7.334'
		/>
	</svg>
);
export default SvgCropRotateBr;
