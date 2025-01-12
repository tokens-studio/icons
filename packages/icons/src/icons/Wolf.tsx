import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWolf = ({
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
			d='M3.87499 4.66659C3.87499 4.66659 3.57241 5.08498 3.21035 5.7777M3.21035 5.7777C2.67113 6.80938 2 8.44945 2 10.2221C3.875 10.2221 4.99999 11.3333 4.99999 11.3333C4.99999 11.3333 5.74999 14.6666 8 14.6666C10.25 14.6666 11 11.3333 11 11.3333C11 11.3333 12.125 10.2221 14 10.2221C14 8.44945 13.3289 6.80938 12.7897 5.7777M3.21035 5.7777C3.21035 5.7777 1.25 4.29616 3.21035 1.33325C3.87499 1.70363 5.75 3.18511 5.75 3.18511C5.75 3.18511 6.875 2.44437 8 2.44437C9.125 2.44437 10.25 3.18511 10.25 3.18511C10.25 3.18511 12.125 1.70363 12.875 1.33325C14.75 4.29629 12.7897 5.7777 12.7897 5.7777M12.125 4.66659C12.125 4.66659 12.4276 5.08498 12.7897 5.7777'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33337 12H8.00004M8.00004 12H8.66671M8.00004 12V12.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.66663 8.33325L6.66663 9.33325'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.3334 8.33325L9.33337 9.33325'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgWolf;
