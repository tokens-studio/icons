import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBathroom = ({
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
			d='M14 8.667v2a2.667 2.667 0 0 1-2.667 2.666H4.667A2.667 2.667 0 0 1 2 10.667v-1.6c0-.221.18-.4.4-.4zM10.667 13.333l.666 1.334M5.333 13.333l-.666 1.334M14 8.667v-4A2.667 2.667 0 0 0 11.333 2H8'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10.267 5.333H5.733a.364.364 0 0 1-.373-.398C5.457 4.05 5.91 2 8 2s2.543 2.05 2.64 2.935a.364.364 0 0 1-.373.398'
		/>
	</svg>
);
export default SvgBathroom;
