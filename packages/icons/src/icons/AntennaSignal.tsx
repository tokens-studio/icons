import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAntennaSignal = ({
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
			d='M12.6667 5.33333C12.6667 5.33333 13.6667 6.33333 13.6667 7.99999C13.6667 9.66666 12.6667 10.6667 12.6667 10.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.6667 3.33333C14.6667 3.33333 16.3334 4.99999 16.3334 8C16.3334 11 14.6667 12.6667 14.6667 12.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33325 5.33333C5.33325 5.33333 4.33325 6.33333 4.33325 7.99999C4.33325 9.66666 5.33325 10.6667 5.33325 10.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33341 3.33333C3.33341 3.33333 1.66675 4.99999 1.66675 8C1.66675 11 3.33341 12.6667 3.33341 12.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.99992 8.66666C9.36812 8.66666 9.66659 8.36819 9.66659 7.99999C9.66659 7.63179 9.36812 7.33333 8.99992 7.33333C8.63172 7.33333 8.33325 7.63179 8.33325 7.99999C8.33325 8.36819 8.63172 8.66666 8.99992 8.66666Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgAntennaSignal;
