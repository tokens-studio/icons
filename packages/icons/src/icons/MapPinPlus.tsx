import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMapPinPlus = ({
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
			d='M10.6667 6.13337C10.6667 8.78437 6.00004 13.3334 6.00004 13.3334C6.00004 13.3334 1.33337 8.78437 1.33337 6.13337C1.33337 3.48241 3.42271 1.33337 6.00004 1.33337C8.57737 1.33337 10.6667 3.48241 10.6667 6.13337Z'
			stroke='currentColor'
		/>
		<path
			d='M6.00004 6.66671C6.36823 6.66671 6.66671 6.36823 6.66671 6.00004C6.66671 5.63185 6.36823 5.33337 6.00004 5.33337C5.63185 5.33337 5.33337 5.63185 5.33337 6.00004C5.33337 6.36823 5.63185 6.66671 6.00004 6.66671Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6666 12.6666H12.6666M12.6666 12.6666H14.6666M12.6666 12.6666V10.6666M12.6666 12.6666V14.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMapPinPlus;
