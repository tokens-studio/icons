import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgServer = ({
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
			d='m4 12.007.007-.008M4 4.007l.007-.008'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M1.333 6.267V1.733c0-.22.18-.4.4-.4h12.534c.22 0 .4.18.4.4v4.534a.4.4 0 0 1-.4.4H1.733a.4.4 0 0 1-.4-.4ZM1.333 14.267V9.733c0-.22.18-.4.4-.4h12.534c.22 0 .4.18.4.4v4.534a.4.4 0 0 1-.4.4H1.733a.4.4 0 0 1-.4-.4Z'
		/>
	</svg>
);
export default SvgServer;
