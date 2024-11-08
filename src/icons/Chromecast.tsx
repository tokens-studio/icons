import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgChromecast = ({
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
			d='m1.333 13.34.007-.007M10 13.333h3.333c.737 0 1.334-.597 1.334-1.333V4c0-.736-.597-1.333-1.334-1.333H2.667c-.737 0-1.334.597-1.334 1.333v.667M1.333 10.667A3.62 3.62 0 0 1 4 13.333M1.333 8c2.667.333 5 2.667 5.334 5.333'
		/>
	</svg>
);
export default SvgChromecast;
