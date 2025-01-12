import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAirplay = ({
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
			d='M4 11.3333H2V2.66667H14V11.3333H12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.74791 12.7115L7.66719 9.83253C7.82552 9.59507 8.17445 9.59507 8.33279 9.83253L10.2521 12.7115C10.4293 12.9773 10.2387 13.3333 9.91925 13.3333H6.08073C5.76125 13.3333 5.57069 12.9773 5.74791 12.7115Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgAirplay;
