import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTextMagnifyingGlass = ({
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
			d='M13 13L14 14'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33337 11.3333C9.33337 12.4379 10.2288 13.3333 11.3334 13.3333C11.8866 13.3333 12.3874 13.1086 12.7494 12.7456C13.1103 12.3838 13.3334 11.8846 13.3334 11.3333C13.3334 10.2287 12.438 9.33325 11.3334 9.33325C10.2288 9.33325 9.33337 10.2287 9.33337 11.3333Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.99996 3.33325V11.3333M5.99996 11.3333H4.66663M5.99996 11.3333H7.33329'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10 4.66659V3.33325H2V4.66659'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgTextMagnifyingGlass;
