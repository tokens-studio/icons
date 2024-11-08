import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgOctagon = ({
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
			d='M8.847 1.73a.4.4 0 0 1 .306 0l4.88 2.021a.4.4 0 0 1 .216.217l2.021 4.879a.4.4 0 0 1 0 .306l-2.021 4.88a.4.4 0 0 1-.216.216l-4.88 2.02a.4.4 0 0 1-.306 0l-4.88-2.02a.4.4 0 0 1-.216-.217l-2.02-4.879a.4.4 0 0 1 0-.306l2.02-4.88a.4.4 0 0 1 .217-.216z'
		/>
	</svg>
);
export default SvgOctagon;
