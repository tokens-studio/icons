import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgRuler = ({
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
			d='M10.667 4.667V1.733a.4.4 0 0 0-.4-.4H5.733a.4.4 0 0 0-.4.4v12.534c0 .22.18.4.4.4h4.534a.4.4 0 0 0 .4-.4v-2.934m0-6.666h-2m2 0V8m0 3.333V8m0 3.333h-2m2-3.333h-2'
		/>
	</svg>
);
export default SvgRuler;
