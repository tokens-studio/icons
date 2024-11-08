import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPrinter = ({
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
			d='m11.333 8.673.007-.007M4.667 11.333h6.666M4 6.667V2.4c0-.22.18-.4.4-.4h7.2c.22 0 .4.18.4.4v4.267m2 6.933V9.333a2.667 2.667 0 0 0-2.667-2.666H4.667A2.667 2.667 0 0 0 2 9.333V13.6c0 .22.18.4.4.4h11.2a.4.4 0 0 0 .4-.4'
		/>
	</svg>
);
export default SvgPrinter;
