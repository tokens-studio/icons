import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMobileFingerprint = ({
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
			d='M8 7.33337V4.24107C8 3.90122 8.06687 3.57499 8.18967 3.27183M14.6667 7.33337V5.21029M9.48147 1.82301C10.0111 1.51374 10.6481 1.33337 11.3333 1.33337C12.853 1.33337 14.1351 2.22045 14.5364 3.43337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10 8.00004V6.54906M12.6667 8.00004V4.56867C12.6667 3.88643 12.0697 3.33337 11.3333 3.33337C10.5969 3.33337 10 3.88643 10 4.56867V5.09808'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33337 11.34L5.34004 11.3326'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33333 3.33337H2.4C2.17909 3.33337 2 3.51246 2 3.73337V13.6C2 13.821 2.17909 14 2.4 14H8.26667C8.4876 14 8.66667 13.821 8.66667 13.6V10.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMobileFingerprint;
