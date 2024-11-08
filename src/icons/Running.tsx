import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgRunning = ({
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
			d='M10 4.667A1.333 1.333 0 1 0 10 2a1.333 1.333 0 0 0 0 2.667M8.409 5.511 6.203 8.268l2.757 2.757-1.378 3.032'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m4.274 6.338 2.258-2.205L8.409 5.51l1.93 2.206h2.48M5.928 10.474l-.827.55H2.895'
		/>
	</svg>
);
export default SvgRunning;
