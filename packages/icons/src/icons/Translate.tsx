import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTranslate = ({
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
			d='M1.33334 3.33333H6.00001M6.00001 3.33333H9.00001M6.00001 3.33333V2M10.6667 3.33333H9.00001M9.00001 3.33333C8.45301 5.15675 7.30748 6.8804 6.00001 8.39527M6.00001 8.39527C4.91734 9.6496 3.72362 10.7607 2.66668 11.6667M6.00001 8.39527C5.33334 7.66667 4.26668 6.2 4.00001 5.66667M6.00001 8.39527L8.00001 10.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9 14L9.76193 12M9.76193 12L11.6667 7L13.5714 12M9.76193 12H13.5714M14.3333 14L13.5714 12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgTranslate;
