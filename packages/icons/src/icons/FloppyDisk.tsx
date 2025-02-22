import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFloppyDisk = ({
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
			d='M2 12.6667V3.33333C2 2.59695 2.59695 2 3.33333 2H10.7811C11.1347 2 11.4738 2.14047 11.7239 2.39053L13.6095 4.27614C13.8595 4.52619 14 4.86533 14 5.21895V12.6667C14 13.4031 13.4031 14 12.6667 14H3.33333C2.59695 14 2 13.4031 2 12.6667Z'
			stroke='currentColor'
		/>
		<path
			d='M5.73337 6H10.2667C10.4876 6 10.6667 5.82091 10.6667 5.6V2.4C10.6667 2.17909 10.4876 2 10.2667 2H5.73337C5.51246 2 5.33337 2.17909 5.33337 2.4V5.6C5.33337 5.82091 5.51246 6 5.73337 6Z'
			stroke='currentColor'
		/>
		<path
			d='M4 9.06669V14H12V9.06669C12 8.84575 11.8209 8.66669 11.6 8.66669H4.4C4.17909 8.66669 4 8.84575 4 9.06669Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgFloppyDisk;
