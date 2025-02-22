import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMoreVertCircle = ({
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
			d='M8.00008 5.00004C8.18415 5.00004 8.33341 4.8508 8.33341 4.66671C8.33341 4.48261 8.18415 4.33337 8.00008 4.33337C7.81601 4.33337 7.66675 4.48261 7.66675 4.66671C7.66675 4.8508 7.81601 5.00004 8.00008 5.00004Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00008 11.6667C8.18415 11.6667 8.33341 11.5174 8.33341 11.3333C8.33341 11.1493 8.18415 11 8.00008 11C7.81601 11 7.66675 11.1493 7.66675 11.3333C7.66675 11.5174 7.81601 11.6667 8.00008 11.6667Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00008 8.33329C8.18415 8.33329 8.33341 8.18403 8.33341 7.99996C8.33341 7.81589 8.18415 7.66663 8.00008 7.66663C7.81601 7.66663 7.66675 7.81589 7.66675 7.99996C7.66675 8.18403 7.81601 8.33329 8.00008 8.33329Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00004C14.6666 4.31814 11.6818 1.33337 7.99992 1.33337C4.31802 1.33337 1.33325 4.31814 1.33325 8.00004C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMoreVertCircle;
