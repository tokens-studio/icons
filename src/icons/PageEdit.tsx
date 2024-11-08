import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPageEdit = ({
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
			d='M13.333 8V3.832a.4.4 0 0 0-.117-.282l-2.099-2.1a.4.4 0 0 0-.283-.117H3.067a.4.4 0 0 0-.4.4v12.534c0 .22.179.4.4.4h4.266M5.333 6.667h5.334M5.333 4H8M5.333 9.333h2M11.97 11.293l.666-.667a.748.748 0 0 1 1.057 1.058l-.666.666m-1.058-1.057-1.994 1.994c-.1.1-.165.23-.187.369l-.162 1.037 1.038-.161a.67.67 0 0 0 .368-.188l1.995-1.994m-1.058-1.057 1.058 1.057'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10.667 1.333V3.6c0 .22.179.4.4.4h2.266'
		/>
	</svg>
);
export default SvgPageEdit;
