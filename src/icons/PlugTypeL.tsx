import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPlugTypeL = ({
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
			d='M6.667 2H3.733a.4.4 0 0 0-.4.4v11.2c0 .22.18.4.4.4h2.934M7.333 4.667h1.334M7.333 8h1.334M7.333 11.333h1.334M9.333 2h2.934c.22 0 .4.18.4.4v11.2a.4.4 0 0 1-.4.4H9.333'
		/>
	</svg>
);
export default SvgPlugTypeL;
