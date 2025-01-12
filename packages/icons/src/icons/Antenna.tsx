import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAntenna = ({
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
			d='M7.99992 4.33333C8.36812 4.33333 8.66659 4.03485 8.66659 3.66667C8.66659 3.29848 8.36812 3 7.99992 3C7.63172 3 7.33325 3.29848 7.33325 3.66667C7.33325 4.03485 7.63172 4.33333 7.99992 4.33333Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6667 1.66667C10.6667 1.66667 11.6667 2.33334 11.6667 3.66667C11.6667 5.00001 10.6667 5.66667 10.6667 5.66667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33325 1.66667C5.33325 1.66667 4.33325 2.33334 4.33325 3.66667C4.33325 5.00001 5.33325 5.66667 5.33325 5.66667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66675 16.3333L5.40749 13.6667M5.40749 13.6667L6.33341 10.3333M5.40749 13.6667H10.5927M11.3334 16.3333L10.5927 13.6667M10.5927 13.6667L9.66675 10.3333M9.66675 10.3333L8.00008 4.33333L6.33341 10.3333M9.66675 10.3333H6.33341'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgAntenna;
