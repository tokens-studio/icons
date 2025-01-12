import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFridge = ({
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
			d='M6.66667 9.33331H6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66667 4H6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33325 6.66665V1.73331C3.33325 1.5124 3.51234 1.33331 3.73325 1.33331H12.2666C12.4875 1.33331 12.6666 1.5124 12.6666 1.73331V6.66665M3.33325 6.66665V14.2666C3.33325 14.4876 3.51234 14.6666 3.73325 14.6666H12.2666C12.4875 14.6666 12.6666 14.4876 12.6666 14.2666V6.66665M3.33325 6.66665H12.6666'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgFridge;
