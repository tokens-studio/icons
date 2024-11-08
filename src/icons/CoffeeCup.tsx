import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCoffeeCup = ({
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
			d='M11.333 7.733V10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7.733c0-.22.18-.4.4-.4h8.533a.4.4 0 0 1 .4.4M8 6c0-.667.476-1.333 1.429-1.333a1.905 1.905 0 0 0 1.904-1.905v-.429M5.333 6v-.333a2 2 0 0 1 2-2c.737 0 1.334-.597 1.334-1.334V2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10.667 7.333h1.666a1.667 1.667 0 1 1 0 3.334h-1'
		/>
	</svg>
);
export default SvgCoffeeCup;
