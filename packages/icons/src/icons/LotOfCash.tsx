import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLotOfCash = ({
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
			d='M3.66666 12V6.66671C3.66666 5.93033 4.26361 5.33337 4.99999 5.33337H8.46666H10.8667H14.3333C15.0697 5.33337 15.6667 5.93033 15.6667 6.66671V12C15.6667 12.7364 15.0697 13.3334 14.3333 13.3334H10.8667H8.46666H4.99999C4.26361 13.3334 3.66666 12.7364 3.66666 12Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.3333 9.34004L13.34 9.33264'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6 9.34004L6.00667 9.33264'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.66666 10.6666H2.99999C2.26361 10.6666 1.66666 10.0697 1.66666 9.33329V3.99996C1.66666 3.26358 2.26361 2.66663 2.99999 2.66663H12.3333C13.0697 2.66663 13.6667 3.26358 13.6667 3.99996V5.33329'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.66668 10.6667C8.93028 10.6667 8.33334 10.0697 8.33334 9.33333C8.33334 8.59693 8.93028 8 9.66668 8C10.4031 8 11 8.59693 11 9.33333C11 10.0697 10.4031 10.6667 9.66668 10.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgLotOfCash;
