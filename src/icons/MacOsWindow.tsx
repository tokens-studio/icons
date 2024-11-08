import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMacOsWindow = ({
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
			strokeWidth={1.5}
			d='M1.333 11.81V4.19c0-.841.664-1.523 1.482-1.523h10.37c.818 0 1.482.682 1.482 1.523v7.62c0 .841-.664 1.523-1.482 1.523H2.815c-.818 0-1.482-.682-1.482-1.524Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m3.333 4.673.007-.007M4.667 4.673l.006-.007M6 4.673l.007-.007'
		/>
	</svg>
);
export default SvgMacOsWindow;
