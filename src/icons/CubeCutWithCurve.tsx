import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCubeCutWithCurve = ({
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
			d='M2.352 4.862 6 6.89M14.667 1.333h-1.334M8 8V6.667a5.34 5.34 0 0 1 3.667-5.068M14.667 8h-1.334M8 14.667v-1.334a5.34 5.34 0 0 1 3.667-5.067'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m8 14.667-5.794-3.22A.4.4 0 0 1 2 11.099V4.902a.4.4 0 0 1 .206-.35l5.6-3.11a.4.4 0 0 1 .388 0L10 2.443M8 8 2.352 4.862M8 14V8M10 9V2.667'
		/>
	</svg>
);
export default SvgCubeCutWithCurve;
