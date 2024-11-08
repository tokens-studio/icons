import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPageSearch = ({
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
			d='M13.333 8V3.832a.4.4 0 0 0-.117-.282l-2.099-2.1a.4.4 0 0 0-.283-.117H3.067a.4.4 0 0 0-.4.4v12.534c0 .22.179.4.4.4h4.266M5.333 6.667h5.334M5.333 4H8M5.333 9.333h2M13.667 13.667l1 1'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0M10.667 1.333V3.6c0 .22.179.4.4.4h2.266'
		/>
	</svg>
);
export default SvgPageSearch;
