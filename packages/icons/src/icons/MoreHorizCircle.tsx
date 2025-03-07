import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMoreHorizCircle = ({
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
			d='M4.66659 8.33329C4.85068 8.33329 4.99992 8.18403 4.99992 7.99996C4.99992 7.81589 4.85068 7.66663 4.66659 7.66663C4.48249 7.66663 4.33325 7.81589 4.33325 7.99996C4.33325 8.18403 4.48249 8.33329 4.66659 8.33329Z'
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
			d='M11.3333 8.33329C11.5174 8.33329 11.6667 8.18403 11.6667 7.99996C11.6667 7.81589 11.5174 7.66663 11.3333 7.66663C11.1493 7.66663 11 7.81589 11 7.99996C11 8.18403 11.1493 8.33329 11.3333 8.33329Z'
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
export default SvgMoreHorizCircle;
