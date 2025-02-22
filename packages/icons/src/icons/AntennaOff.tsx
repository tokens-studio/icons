import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAntennaOff = ({
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
			d='M7.99992 3.33333C8.36812 3.33333 8.66659 3.03485 8.66659 2.66667C8.66659 2.29848 8.36812 2 7.99992 2C7.63172 2 7.33325 2.29848 7.33325 2.66667C7.33325 3.03485 7.63172 3.33333 7.99992 3.33333Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66675 15.3333L5.40749 12.6667M5.40749 12.6667L6.33341 9.33333M5.40749 12.6667H10.5927M11.3334 15.3333L10.5927 12.6667M10.5927 12.6667L9.80308 9.82406M6.33341 9.33333H9.00008M6.33341 9.33333L6.86661 7.41386M7.62968 4.66666L8.00008 3.33333L8.69781 5.84505'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 2L14 14'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgAntennaOff;
