import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPackages = ({
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
			d='M6.667 10v2.667c0 .736-.597 1.333-1.334 1.333H2.667a1.333 1.333 0 0 1-1.334-1.333V10c0-.736.597-1.333 1.334-1.333h2.666c.737 0 1.334.597 1.334 1.333M10.667 3.333V6c0 .736-.597 1.333-1.334 1.333H6.667A1.333 1.333 0 0 1 5.333 6V3.333C5.333 2.597 5.93 2 6.667 2h2.666c.737 0 1.334.597 1.334 1.333M14.667 10v2.667c0 .736-.597 1.333-1.334 1.333h-2.666a1.333 1.333 0 0 1-1.334-1.333V10c0-.736.597-1.333 1.334-1.333h2.666c.737 0 1.334.597 1.334 1.333M4 10.667v-2M8 4V2M12 10.667v-2'
		/>
	</svg>
);
export default SvgPackages;
