import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBoxShadowY = ({
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
			d='m3.997 14.333.006-.007M6.663 14.333l.007-.007M9.33 14.333l.007-.007M11.997 14.333l.006-.007M2.667 11.326v-8.66h10.666v8.66z'
		/>
	</svg>
);
export default SvgBoxShadowY;
