import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMicrophoneCheck = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={17}
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
			d='M11.333 13.667 12.667 15 16 11.667'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M8.333 3.333a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M1.667 6.667v.666a4.667 4.667 0 1 0 9.333 0v-.666M6.333 12v2.667m0 0h-2m2 0h2'
		/>
	</svg>
);
export default SvgMicrophoneCheck;
