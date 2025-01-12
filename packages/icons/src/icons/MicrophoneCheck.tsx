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
			d='M11.3333 13.6666L12.6666 15L16 11.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.33331 3.33337C8.33331 2.2288 7.43788 1.33337 6.33331 1.33337C5.22874 1.33337 4.33331 2.2288 4.33331 3.33337V7.33337C4.33331 8.43794 5.22874 9.33337 6.33331 9.33337C7.43788 9.33337 8.33331 8.43794 8.33331 7.33337V3.33337Z'
			stroke='currentColor'
		/>
		<path
			d='M1.66669 6.66663V7.33329C1.66669 9.91063 3.75603 12 6.33335 12C8.91069 12 11 9.91063 11 7.33329V6.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.33331 12V14.6667M6.33331 14.6667H4.33331M6.33331 14.6667H8.33331'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMicrophoneCheck;
