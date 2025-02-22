import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMicrophonePlus = ({
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
			d='M12.3281 12.6666H14.3281M14.3281 12.6666H16.3281M14.3281 12.6666V10.6666M14.3281 12.6666V14.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.33337 3.33337C8.33337 2.2288 7.43794 1.33337 6.33337 1.33337C5.2288 1.33337 4.33337 2.2288 4.33337 3.33337V7.33337C4.33337 8.43794 5.2288 9.33337 6.33337 9.33337C7.43794 9.33337 8.33337 8.43794 8.33337 7.33337V3.33337Z'
			stroke='currentColor'
		/>
		<path
			d='M1.66663 6.66663V7.33329C1.66663 9.91063 3.75597 12 6.33329 12C8.91063 12 11 9.91063 11 7.33329V6.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.33337 12V14.6667M6.33337 14.6667H4.33337M6.33337 14.6667H8.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMicrophonePlus;
