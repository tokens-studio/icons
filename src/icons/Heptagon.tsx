import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHeptagon = ({
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
			d='M7.826 1.084a.4.4 0 0 1 .347 0l5.387 2.593a.4.4 0 0 1 .216.272l1.33 5.828a.4.4 0 0 1-.077.339l-3.727 4.674a.4.4 0 0 1-.313.15H5.011a.4.4 0 0 1-.313-.15L.971 10.116a.4.4 0 0 1-.078-.339l1.33-5.828a.4.4 0 0 1 .217-.272z'
		/>
	</svg>
);
export default SvgHeptagon;
