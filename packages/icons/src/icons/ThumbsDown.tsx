import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgThumbsDown = ({
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
			d='M10.9816 2.33325H2.73337C2.51246 2.33325 2.33337 2.51234 2.33337 2.73325V9.26659C2.33337 9.48752 2.51246 9.66659 2.73337 9.66659H4.57845C5.04681 9.66659 5.48081 9.91232 5.72177 10.3139L7.52871 13.3255C7.91864 13.9753 8.83697 14.0371 9.31037 13.4453C9.53351 13.1664 9.60544 12.7957 9.50277 12.4535L8.82117 10.1815C8.74417 9.92485 8.93637 9.66659 9.20431 9.66659H12.2544C13.1335 9.66659 13.772 8.83059 13.5407 7.98245L12.268 3.31576C12.1098 2.73568 11.5829 2.33325 10.9816 2.33325Z'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M4.66663 9.66659V2.33325'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgThumbsDown;
