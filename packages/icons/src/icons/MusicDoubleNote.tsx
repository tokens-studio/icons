import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMusicDoubleNote = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M13.3333 9.33333V2L6 3.33333V10.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3333 12.6667H12C12.7364 12.6667 13.3333 12.0698 13.3333 11.3334V9.33337H11.3333C10.5969 9.33337 10 9.93031 10 10.6667V11.3334C10 12.0698 10.5969 12.6667 11.3333 12.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.99999 14H4.66666C5.40304 14 5.99999 13.403 5.99999 12.6666V10.6666H3.99999C3.26361 10.6666 2.66666 11.2636 2.66666 12V12.6666C2.66666 13.403 3.26361 14 3.99999 14Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMusicDoubleNote;
