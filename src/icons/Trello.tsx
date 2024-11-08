import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTrello = ({
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
			d='M12.667 2H3.333C2.597 2 2 2.597 2 3.333v9.334C2 13.403 2.597 14 3.333 14h9.334c.736 0 1.333-.597 1.333-1.333V3.333C14 2.597 13.403 2 12.667 2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6.933 4H4.4a.4.4 0 0 0-.4.4v7.2c0 .22.18.4.4.4h2.533a.4.4 0 0 0 .4-.4V4.4a.4.4 0 0 0-.4-.4M11.6 4H9.067a.4.4 0 0 0-.4.4v4.533c0 .221.179.4.4.4H11.6a.4.4 0 0 0 .4-.4V4.4a.4.4 0 0 0-.4-.4'
		/>
	</svg>
);
export default SvgTrello;
