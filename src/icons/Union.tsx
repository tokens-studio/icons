import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUnion = ({
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
			d='M10 6h3.6c.22 0 .4.18.4.4v7.2a.4.4 0 0 1-.4.4H6.4a.4.4 0 0 1-.4-.4V10'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10 6V2.4a.4.4 0 0 0-.4-.4H2.4a.4.4 0 0 0-.4.4v7.2c0 .22.18.4.4.4H6'
		/>
	</svg>
);
export default SvgUnion;
