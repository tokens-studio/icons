import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMoreVert = ({
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
			d='M8.00008 8.33329C8.18415 8.33329 8.33341 8.18403 8.33341 7.99996C8.33341 7.81589 8.18415 7.66663 8.00008 7.66663C7.81601 7.66663 7.66675 7.81589 7.66675 7.99996C7.66675 8.18403 7.81601 8.33329 8.00008 8.33329Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00008 13.6667C8.18415 13.6667 8.33341 13.5174 8.33341 13.3333C8.33341 13.1493 8.18415 13 8.00008 13C7.81601 13 7.66675 13.1493 7.66675 13.3333C7.66675 13.5174 7.81601 13.6667 8.00008 13.6667Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00008 3.00004C8.18415 3.00004 8.33341 2.8508 8.33341 2.66671C8.33341 2.48261 8.18415 2.33337 8.00008 2.33337C7.81601 2.33337 7.66675 2.48261 7.66675 2.66671C7.66675 2.8508 7.81601 3.00004 8.00008 3.00004Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMoreVert;
