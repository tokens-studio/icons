import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPlaystationGamepad = ({
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
			d='M12.6668 11.6666C14.3335 14 16.9659 12.2767 16.3335 9.99996C15.3837 6.58071 14.8669 4.677 14.5981 3.67191C14.4399 3.08087 13.9043 2.66663 13.2924 2.66663H4.70782C4.096 2.66663 3.56279 3.08317 3.41402 3.67663C2.85445 5.90895 2.35519 7.86769 1.76289 9.99996C1.13046 12.2767 3.76289 14 5.42955 11.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.6666 2.66663V3.99996C11.6666 4.73634 11.0697 5.33329 10.3333 5.33329H7.66659C6.93021 5.33329 6.33325 4.73634 6.33325 3.99996V2.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.33333 10.6667C7.06971 10.6667 7.66667 10.0697 7.66667 9.33333C7.66667 8.59693 7.06971 8 6.33333 8C5.59695 8 5 8.59693 5 9.33333C5 10.0697 5.59695 10.6667 6.33333 10.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.6666 10.6667C12.403 10.6667 12.9999 10.0697 12.9999 9.33333C12.9999 8.59693 12.403 8 11.6666 8C10.9302 8 10.3333 8.59693 10.3333 9.33333C10.3333 10.0697 10.9302 10.6667 11.6666 10.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPlaystationGamepad;
