import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMoreHoriz = ({
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
			d='M13.3333 8.33329C13.5174 8.33329 13.6667 8.18403 13.6667 7.99996C13.6667 7.81589 13.5174 7.66663 13.3333 7.66663C13.1493 7.66663 13 7.81589 13 7.99996C13 8.18403 13.1493 8.33329 13.3333 8.33329Z'
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
			d='M2.66659 8.33329C2.85068 8.33329 2.99992 8.18403 2.99992 7.99996C2.99992 7.81589 2.85068 7.66663 2.66659 7.66663C2.48249 7.66663 2.33325 7.81589 2.33325 7.99996C2.33325 8.18403 2.48249 8.33329 2.66659 8.33329Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMoreHoriz;
