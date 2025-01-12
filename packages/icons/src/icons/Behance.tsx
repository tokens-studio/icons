import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBehance = ({
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
			d='M5.4647 7.47828C8.84498 7.47828 8.84498 12 5.4647 12C3.55793 12 1.33325 12 1.33325 12V7.47828M5.4647 7.47828C3.55793 7.47828 1.33325 7.47828 1.33325 7.47828M5.4647 7.47828C8.84498 7.47828 8.84498 3.33335 5.4647 3.33334C3.96236 3.33334 1.33325 3.33334 1.33325 3.33334V7.47828'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.9999 6C10.5272 6 9.33325 7.34313 9.33325 9H14.6666C14.6666 7.34313 13.4727 6 11.9999 6Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33325 9C9.33325 10.6569 10.5272 12 11.9999 12C13.8367 12 14.3333 10.6667 14.3333 10.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.6666 4H10.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBehance;
