import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCornerBottomLeft = ({
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
			d='M2.66699 5.33331L2.67366 5.34072'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.66699 2.66669L2.67366 2.67409'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33362 2.66669L5.34028 2.67409'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00037 2.66669L8.00703 2.67409'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.667 2.66669L10.6737 2.67409'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.3336 2.66669L13.3403 2.67409'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.3336 5.33331L13.3403 5.34072'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.3336 8L13.3403 8.0074'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.3336 10.6667L13.3403 10.6741'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.3336 13.3333L13.3403 13.3407'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.667 13.3333L10.6737 13.3407'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.66699 8.00665V13.34H8.00035V8.00665H2.66699Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCornerBottomLeft;
