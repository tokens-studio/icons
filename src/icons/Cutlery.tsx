import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCutlery = ({
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
			d='M4 13.333h2m0 0h2m-2 0V10M11.333 13.333V8S13 7.333 13 6V3M11.333 5.667V3M3 7.333C3.667 8.753 6 10 6 10s2.333-1.248 3-2.667C9.72 5.802 9 3 9 3H3s-.72 2.802 0 4.333'
		/>
	</svg>
);
export default SvgCutlery;
