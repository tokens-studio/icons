import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAfricanTree = ({
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
			d='M8 14.667V8m0 0V5.333M8 8l2-2M8.283 12.384l4.112-4.113a3.668 3.668 0 0 0-.341-5.489 6.6 6.6 0 0 0-8.107 0 3.668 3.668 0 0 0-.342 5.49l4.112 4.112a.4.4 0 0 0 .566 0'
		/>
	</svg>
);
export default SvgAfricanTree;
