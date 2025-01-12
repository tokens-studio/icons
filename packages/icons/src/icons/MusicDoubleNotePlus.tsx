import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMusicDoubleNotePlus = ({
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
			d='M12.3333 4.33337H14.3333M14.3333 4.33337H16.3333M14.3333 4.33337V2.33337M14.3333 4.33337V6.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5 10.6666V3.33324L10.3333 2.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11 9.33329V6.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.99999 12.6667H9.66666C10.4031 12.6667 11 12.0698 11 11.3334V9.33337H8.99999C8.26359 9.33337 7.66666 9.93031 7.66666 10.6667V11.3334C7.66666 12.0698 8.26359 12.6667 8.99999 12.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.99999 14H3.66666C4.40304 14 4.99999 13.403 4.99999 12.6666V10.6666H2.99999C2.26361 10.6666 1.66666 11.2636 1.66666 12V12.6666C1.66666 13.403 2.26361 14 2.99999 14Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMusicDoubleNotePlus;
