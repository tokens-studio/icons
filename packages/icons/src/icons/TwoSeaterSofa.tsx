import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTwoSeaterSofa = ({
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
			d='M1.33337 10.6667V12.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 8.66658V4.66659C8 3.93021 8.59693 3.33325 9.33333 3.33325H12C12.7364 3.33325 13.3333 3.93021 13.3333 4.66659V5.99992'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.99996 8.66658V4.66659C7.99996 3.93021 7.40303 3.33325 6.66663 3.33325H3.99996C3.26358 3.33325 2.66663 3.93021 2.66663 4.66659V5.99992'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.3334 6C12.597 6 12 6.59695 12 7.33333V8.66667H4.00004V7.33333C4.00004 6.59695 3.40309 6 2.66671 6C1.93033 6 1.33337 6.59695 1.33337 7.33333V11.3333H14.6667V7.33333C14.6667 6.59695 14.0698 6 13.3334 6Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.6666 10.6667V12.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgTwoSeaterSofa;
