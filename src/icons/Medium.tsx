import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMedium = ({
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
			d='M4.667 10.667a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334M10 10.667c.736 0 1.333-1.194 1.333-2.667S10.736 5.333 10 5.333 8.667 6.527 8.667 8s.597 2.667 1.333 2.667M13.333 10.667c.368 0 .667-1.194.667-2.667s-.299-2.667-.667-2.667-.666 1.194-.666 2.667.298 2.667.666 2.667'
		/>
	</svg>
);
export default SvgMedium;
