import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPuzzle = ({
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
			d='M2.66663 9.33337V12.2667C2.66663 12.4876 2.84571 12.6667 3.06663 12.6667H6.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6667 9.33337V12.2667C12.6667 12.4876 12.4876 12.6667 12.2667 12.6667H9.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33337 3.33337H12.2667C12.4876 3.33337 12.6667 3.51246 12.6667 3.73337V6.66671'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.66663 6.66671V3.73337C2.66663 3.51246 2.84571 3.33337 3.06663 3.33337H6.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33329 12.6666V13.3333C9.33329 14.0697 8.73636 14.6666 7.99996 14.6666C7.26356 14.6666 6.66663 14.0697 6.66663 13.3333V12.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.66663 6.66663H3.33329C4.06967 6.66663 4.66663 7.26356 4.66663 7.99996C4.66663 8.73636 4.06967 9.33329 3.33329 9.33329H2.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6666 6.66663H13.3333C14.0697 6.66663 14.6666 7.26356 14.6666 7.99996C14.6666 8.73636 14.0697 9.33329 13.3333 9.33329H12.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33329 3.33337V2.66671C9.33329 1.93033 8.73636 1.33337 7.99996 1.33337C7.26356 1.33337 6.66663 1.93033 6.66663 2.66671V3.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPuzzle;
