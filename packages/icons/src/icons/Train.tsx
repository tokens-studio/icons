import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTrain = ({
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
			d='M6.40588 4.66675H9.59428C10.5547 4.66675 11.3334 5.44538 11.3334 6.40588C11.3334 6.54995 11.2166 6.66675 11.0725 6.66675H4.92761C4.78354 6.66675 4.66675 6.54995 4.66675 6.40588C4.66675 5.44538 5.44538 4.66675 6.40588 4.66675Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6 2H10C12.2091 2 14 3.79086 14 6V8.66667C14 10.8758 12.2091 12.6667 10 12.6667H6C3.79086 12.6667 2 10.8758 2 8.66667V6C2 3.79086 3.79086 2 6 2Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6667 10.0067L10.6734 9.99927'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33325 10.0067L5.33992 9.99927'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.00008 12.6667L5.66675 14.3334'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M9 12.6667L10.3333 14.3334'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M11 12.6667L12.3333 14.3334'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M5.00008 12.6667L3.66675 14.3334'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgTrain;
