import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSunLight = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
		height={18}
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
			d='M9 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8M15.667 9h.666M9 2.333v-.666M9 16.333v-.666M14.333 14.333l-.666-.666M14.333 3.667l-.666.666M3.667 14.333l.666-.666M3.667 3.667l.666.666M1.667 9h.666'
		/>
	</svg>
);
export default SvgSunLight;
