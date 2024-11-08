import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMacDock = ({
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
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M5.333 11.333a.333.333 0 1 1 0-.666.333.333 0 0 1 0 .666M8 11.333a.333.333 0 1 1 0-.666.333.333 0 0 1 0 .666M10.667 11.333a.333.333 0 1 1 0-.666.333.333 0 0 1 0 .666'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M14 14H2a.667.667 0 0 1-.667-.667V2.667C1.333 2.298 1.632 2 2 2h12c.368 0 .667.298.667.667v10.666A.667.667 0 0 1 14 14M1.333 11.667 2.667 11M14.667 11.667 13.333 11'
		/>
	</svg>
);
export default SvgMacDock;
