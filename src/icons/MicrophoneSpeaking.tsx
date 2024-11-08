import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMicrophoneSpeaking = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
		height={16}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M11 3.333a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M4.333 2v1.333m-2.666-2V4m12-2v1.333m2.666-2V4M4.333 6.667v.666a4.667 4.667 0 1 0 9.334 0v-.666M9 12v2.667m0 0H7m2 0h2'
		/>
	</svg>
);
export default SvgMicrophoneSpeaking;
