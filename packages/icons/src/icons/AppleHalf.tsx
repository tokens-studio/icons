import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAppleHalf = ({
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
			d='M8.09799 14.1764L7.99992 14.1567L7.90185 14.1764C6.31743 14.4933 4.82163 14.3171 3.72893 13.4429C2.642 12.5733 1.83325 10.916 1.83325 8C1.83325 5.01789 2.5052 3.80636 3.39019 3.36387C3.8531 3.13242 4.45173 3.06506 5.21344 3.15295C5.97425 3.24074 6.85212 3.47779 7.84179 3.80768L8.01559 3.8656L8.18559 3.79758C9.84005 3.13578 11.3272 2.88226 12.3718 3.36975C13.3513 3.82686 14.1666 5.06217 14.1666 8C14.1666 10.916 13.3579 12.5733 12.2709 13.4429C11.1782 14.3171 9.68239 14.4933 8.09799 14.1764Z'
			stroke='currentColor'
		/>
		<path
			d='M8 3.66666C8 1.99999 7.33333 1.33333 6 1.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path d='M8 4V14' stroke='currentColor' />
		<path
			d='M10 8V9.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgAppleHalf;
