import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHandCard = ({
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
			d='M7.33325 6H14.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33325 7.33337L3.20433 5.22841C3.71039 4.6591 4.43573 4.33337 5.19743 4.33337H5.33325'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33325 13.0002L4.99992 13L7.66659 11.0002C7.66659 11.0002 8.20599 10.6352 8.99992 10C10.6666 8.66677 8.99992 6.55565 7.33325 7.66643C5.97598 8.57097 4.66659 9.3335 4.66659 9.3335'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33325 9.00004V4.66671C5.33325 3.93033 5.93021 3.33337 6.66659 3.33337H13.3333C14.0697 3.33337 14.6666 3.93033 14.6666 4.66671V8.66671C14.6666 9.40311 14.0697 10 13.3333 10H8.99992'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgHandCard;
