import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTreadmill = ({
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
			d='M8.667 4a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667M7.075 4.845 4.87 7.602l2.757 2.756-1.379 3.033'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m2.94 5.672 2.258-2.206 1.877 1.379 1.93 2.205h1.148M4.594 9.807l-.827.551H1.562M2.229 14.358l10.205-1.333V5.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m13.928 4-1.494 1.333-1.1 1M13.928 14.474l-1.494-1.45'
		/>
	</svg>
);
export default SvgTreadmill;
