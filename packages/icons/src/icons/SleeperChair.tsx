import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSleeperChair = ({
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
			d='M2.66663 12V14'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33337 6.66667V3.33333C3.33337 2.59695 3.93033 2 4.66671 2H11.3334C12.0698 2 12.6667 2.59695 12.6667 3.33333V6.66667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13 6.66675C12.0796 6.66675 11.3334 7.41295 11.3334 8.33341V9.33341H4.66671V8.33341C4.66671 7.41295 3.92051 6.66675 3.00004 6.66675C2.07957 6.66675 1.33337 7.41295 1.33337 8.33341C1.33337 9.13975 1.90596 9.81235 2.66671 9.96675V12.0001H13.3334V9.96675C14.0941 9.81235 14.6667 9.13975 14.6667 8.33341C14.6667 7.41295 13.9205 6.66675 13 6.66675Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.3334 12V14'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSleeperChair;
