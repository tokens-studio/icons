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
			d='M11 3.33337C11 2.2288 10.1046 1.33337 9 1.33337C7.89543 1.33337 7 2.2288 7 3.33337V7.33337C7 8.43794 7.89543 9.33337 9 9.33337C10.1046 9.33337 11 8.43794 11 7.33337V3.33337Z'
			stroke='currentColor'
		/>
		<path
			d='M4.33329 2.00004V3.33337M1.66663 1.33337V4.00004M13.6666 2.00004V3.33337M16.3333 1.33337V4.00004'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.33337 6.66663V7.33329C4.33337 9.91063 6.42271 12 9.00004 12C11.5774 12 13.6667 9.91063 13.6667 7.33329V6.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9 12V14.6667M9 14.6667H7M9 14.6667H11'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMicrophoneSpeaking;
