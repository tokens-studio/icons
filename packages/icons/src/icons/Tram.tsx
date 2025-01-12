import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTram = ({
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
			d='M10 10.6734L10.0067 10.666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6 10.6734L6.00667 10.666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.66667 3.99992H10C11.8409 3.99992 13.3333 5.49231 13.3333 7.33325V11.9999C13.3333 12.7363 12.7364 13.3333 12 13.3333H4.00001C3.26363 13.3333 2.66667 12.7363 2.66667 11.9999V7.33325C2.66667 5.49231 4.15906 3.99992 6 3.99992H8.66667ZM8.66667 3.99992L9.33334 1.33325M9.33334 1.33325H11.3333M9.33334 1.33325H4.66667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.00001 13.3333L5.66667 14.9999'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M9 13.3333L10.3333 14.9999'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M11 13.3333L12.3333 14.9999'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M5.00001 13.3333L3.66667 14.9999'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M6.4058 6H9.5942C10.5547 6 11.3333 6.77867 11.3333 7.73913C11.3333 7.8832 11.2165 8 11.0725 8H4.92754C4.78347 8 4.66667 7.8832 4.66667 7.73913C4.66667 6.77867 5.4453 6 6.4058 6Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgTram;
