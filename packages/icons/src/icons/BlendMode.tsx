import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBlendMode = ({
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
		<path d='M3 11L12.3333 6.66667' stroke='currentColor' />
		<path
			d='M13.3334 9.33333C13.3334 6.38781 8.00002 1.33333 8.00002 1.33333C8.00002 1.33333 2.66669 6.38781 2.66669 9.33333C2.66669 12.2789 5.0545 14.6667 8.00002 14.6667C10.9456 14.6667 13.3334 12.2789 13.3334 9.33333Z'
			stroke='currentColor'
		/>
		<path
			d='M13.3333 9.33335C13.3333 12.2789 10.9455 14.6667 8.00001 14.6667C5.68841 14.6667 3.72029 13.1961 2.98022 11.1394L12.3895 6.64857C12.9503 7.60305 13.3333 8.54394 13.3333 9.33335Z'
			fill='currentColor'
		/>
	</svg>
);
export default SvgBlendMode;
