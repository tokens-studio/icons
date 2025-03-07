import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMoonSat = ({
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
			d='M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00004C14.6666 4.31814 11.6818 1.33337 7.99992 1.33337C4.31802 1.33337 1.33325 4.31814 1.33325 8.00004C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z'
			stroke='currentColor'
		/>
		<path
			d='M5.08849 2.04456C5.99053 2.23818 6.66674 3.04013 6.66674 4.00001C6.66674 5.10458 5.77131 6.00001 4.66674 6.00001C3.63421 6.00001 2.78443 5.21757 2.67798 4.21328'
			stroke='currentColor'
		/>
		<path
			d='M14.6667 8.70033C14.2432 8.26813 13.6529 8 13.0001 8C11.7114 8 10.6667 9.04467 10.6667 10.3333C10.6667 11.5088 11.536 12.4813 12.6667 12.6431'
			stroke='currentColor'
		/>
		<path
			d='M9.66675 5.6733L9.67341 5.66589'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66659 11.3333C7.40299 11.3333 7.99992 10.7364 7.99992 9.99996C7.99992 9.26356 7.40299 8.66663 6.66659 8.66663C5.93021 8.66663 5.33325 9.26356 5.33325 9.99996C5.33325 10.7364 5.93021 11.3333 6.66659 11.3333Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMoonSat;
