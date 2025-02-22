import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgColorFilter = ({
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
			d='M8 9.66669C10.2091 9.66669 12 7.87582 12 5.66669C12 3.45755 10.2091 1.66669 8 1.66669C5.79086 1.66669 4 3.45755 4 5.66669C4 7.87582 5.79086 9.66669 8 9.66669Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6667 14.3333C12.8759 14.3333 14.6667 12.5424 14.6667 10.3333C14.6667 8.12418 12.8759 6.33331 10.6667 6.33331C8.45761 6.33331 6.66675 8.12418 6.66675 10.3333C6.66675 12.5424 8.45761 14.3333 10.6667 14.3333Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33325 14.3333C7.54239 14.3333 9.33325 12.5424 9.33325 10.3333C9.33325 8.12418 7.54239 6.33331 5.33325 6.33331C3.12411 6.33331 1.33325 8.12418 1.33325 10.3333C1.33325 12.5424 3.12411 14.3333 5.33325 14.3333Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgColorFilter;
