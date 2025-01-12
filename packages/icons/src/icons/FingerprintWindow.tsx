import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFingerprintWindow = ({
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
			d='M6.00001 14H2.66668C1.9303 14 1.33334 13.4031 1.33334 12.6667V3.33333C1.33334 2.59695 1.9303 2 2.66668 2H13.3333C14.0697 2 14.6667 2.59695 14.6667 3.33333V7.33333'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M8 14V10.9077C8 10.5679 8.06687 10.2416 8.18967 9.93847M14.6667 14V11.8769M9.48147 8.48967C10.0111 8.18033 10.6481 8 11.3333 8C12.853 8 14.1351 8.88707 14.5364 10.1'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10 14.6667V13.2157M12.6667 14.6667V11.2353C12.6667 10.5531 12.0697 10 11.3333 10C10.5969 10 10 10.5531 10 11.2353V11.7647'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33334 4.66669H14.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33334 3.33999L3.34001 3.33258'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33334 3.33999L5.34001 3.33258'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33334 3.33999L7.34001 3.33258'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFingerprintWindow;
