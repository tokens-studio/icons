import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPresentation = ({
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
			d='M14.667 3.067V11.6a.4.4 0 0 1-.4.4H1.733a.4.4 0 0 1-.4-.4V3.067c0-.221.18-.4.4-.4h12.534c.22 0 .4.179.4.4M5.667 14.333 8 12l2.333 2.333M8 1.333v1.334M6 8v1.333M8 6.667v2.666M10 5.333v4'
		/>
	</svg>
);
export default SvgPresentation;
