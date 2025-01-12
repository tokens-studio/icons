import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMicroscope = ({
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
			d='M12.6667 14.6666H4.66671M4.66671 14.6666H3.33337M4.66671 14.6666V12.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6666 10.6666H6.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6667 1.33337H8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.99996 4.66663C5.99996 4.66663 4.66663 5.33329 4.66663 7.33329V8.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6667 3.06663V7.59996C10.6667 7.82089 10.4876 7.99996 10.2667 7.99996H8.4C8.17907 7.99996 8 7.82089 8 7.59996V3.06663C8 2.84571 8.17907 2.66663 8.4 2.66663H10.2667C10.4876 2.66663 10.6667 2.84571 10.6667 3.06663Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66663 12.6666C3.56206 12.6666 2.66663 11.7712 2.66663 10.6666C2.66663 9.56203 3.56206 8.66663 4.66663 8.66663C5.77119 8.66663 6.66663 9.56203 6.66663 10.6666C6.66663 11.7712 5.77119 12.6666 4.66663 12.6666Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMicroscope;
