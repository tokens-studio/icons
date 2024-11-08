import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFigma = ({
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
			d='M4 4a2 2 0 0 1 2-2h2v4H6a2 2 0 0 1-2-2M8 2h2a2 2 0 1 1 0 4H8z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0M4 12a2 2 0 0 1 2-2h2v2a2 2 0 0 1-4 0M4 8a2 2 0 0 1 2-2h2v4H6a2 2 0 0 1-2-2'
		/>
	</svg>
);
export default SvgFigma;
