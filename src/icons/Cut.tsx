import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCut = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
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
			d='M12.333 8H13M15.667 8h.666M5.157 4.667A2 2 0 1 0 2.176 2a2 2 0 0 0 2.981 2.667m0 0L13.667 12M5.157 11.333A2 2 0 1 1 2.176 14a2 2 0 0 1 2.981-2.667m0 0L13.667 4'
		/>
	</svg>
);
export default SvgCut;
