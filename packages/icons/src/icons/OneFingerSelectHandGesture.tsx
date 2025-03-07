import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgOneFingerSelectHandGesture = ({
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
			d='M4.99995 8.00004L3.66389 9.78144C3.27892 10.2948 3.31413 11.0094 3.74768 11.4824L6.27028 14.2344C6.52282 14.5098 6.87881 14.6667 7.25255 14.6667C7.97668 14.6667 9.16095 14.6667 10.3333 14.6667C11.9333 14.6667 12.9999 13.3334 12.9999 12C12.9999 12 12.9999 7.42864 12.9999 6.28577'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11 6.66664C11 6.66664 11 6.58322 11 6.28568C11 4.76187 13 4.76187 13 6.28568'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9 6.6667C9 6.6667 9 6.11892 9 5.52384C9 4.00003 11 4.00003 11 5.52384C11 5.67261 11 6.13697 11 6.28574C11 6.58329 11 6.6667 11 6.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7 6.66673C7 6.66673 7 5.74389 7 5.00003C7 3.47623 9 3.47623 9 5.00003C9 5.00003 9 5.37507 9 5.52385C9 6.11893 9 6.66673 9 6.66673'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7 6.66671C7 6.66671 7 5.74389 7 5.00004C7 4.22775 7 3.12649 7 2.3327C7 1.78041 6.55229 1.33337 6 1.33337C5.44771 1.33337 5 1.78109 5 2.33337V8.00004V10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgOneFingerSelectHandGesture;
