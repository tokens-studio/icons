import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSandals = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={16}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M14.667 4.667S15 2 12 2 9.333 4.667 9.333 4.667m5.334 0H9.333m5.334 0-.143 2m-5.19-2 .142 2m5.048 0-.391 5.476A2 2 0 0 1 12.138 14h-.276a2 2 0 0 1-1.995-1.857l-.39-5.476m5.047 0H9.476M6.667 4.667S7 2 4 2 1.333 4.667 1.333 4.667m5.334 0H1.333m5.334 0-.143 2m-5.19-2 .142 2m5.048 0-.391 5.476A2 2 0 0 1 4.138 14h-.276a2 2 0 0 1-1.995-1.857l-.39-5.476m5.047 0H1.476'
		/>
	</svg>
);
export default SvgSandals;
