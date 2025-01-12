import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEvStation = ({
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
			d='M14 3.33331V5.99998'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33334 12.6667V6.00002C3.33334 5.26364 3.9303 4.66669 4.66668 4.66669H10.6667C11.4031 4.66669 12 5.26364 12 6.00002V12.6667C12 13.4031 11.4031 14 10.6667 14H4.66668C3.9303 14 3.33334 13.4031 3.33334 12.6667Z'
			stroke='currentColor'
		/>
		<path
			d='M3.33334 6.66667V3.33333C3.33334 2.59695 3.9303 2 4.66668 2H10.6667C11.4031 2 12 2.59695 12 3.33333V6.66667'
			stroke='currentColor'
		/>
		<path
			d='M7.44448 7.33331L6.33334 9.33331H9.00001L7.88888 11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgEvStation;
