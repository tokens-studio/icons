import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgRulerPlus = ({
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
			d='M10 3.333h2m0 0h2m-2 0v-2m0 2v2M7.333 4.667V1.733a.4.4 0 0 0-.4-.4H2.4a.4.4 0 0 0-.4.4v12.534c0 .22.18.4.4.4h4.533a.4.4 0 0 0 .4-.4v-2.934m0-6.666h-2m2 0V8m0 3.333V8m0 3.333h-2m2-3.333h-2'
		/>
	</svg>
);
export default SvgRulerPlus;
