import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFish = ({
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
			d='M7.00002 5.99998C7.00002 5.99998 7.00002 4.66665 6.33335 3.33331C9.00002 3.33331 10.6667 4.99996 10.6667 4.99996C10.6667 4.99996 13 4.66665 14.6667 7.99998C14 11.6666 10.6667 12 10.6667 12L8.00002 13.6666C8.00002 13.6666 8.00002 13 8.00002 11.6666C6.33335 11 4.66667 9.33331 4.66669 8.33331C4.66669 7.33331 7.00002 5.99998 7.00002 5.99998ZM7.00002 5.99998C7.00002 5.99998 7.66669 5.66665 8.33335 5.66665'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33331 6.33331L1.99998 8.33331L1.33331 10.3333C1.33331 10.3333 4.66665 10.3333 4.66665 8.33331C4.66665 6.33331 1.33331 6.33331 1.33331 6.33331Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3333 8.00667L11.34 7.99927'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFish;
