import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMicrophoneWarning = ({
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
			d='M14 9.33337V12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 14.6733L14.0067 14.6659'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.66663 3.33337C8.66663 2.2288 7.7712 1.33337 6.66663 1.33337C5.56206 1.33337 4.66663 2.2288 4.66663 3.33337V7.33337C4.66663 8.43794 5.56206 9.33337 6.66663 9.33337C7.7712 9.33337 8.66663 8.43794 8.66663 7.33337V3.33337Z'
			stroke='currentColor'
		/>
		<path
			d='M2 6.66663V7.33329C2 9.91063 4.08934 12 6.66667 12C9.244 12 11.3333 9.91063 11.3333 7.33329V6.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66663 12V14.6667M6.66663 14.6667H4.66663M6.66663 14.6667H8.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMicrophoneWarning;
