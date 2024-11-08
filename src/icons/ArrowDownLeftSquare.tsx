import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgArrowDownLeftSquare = ({
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
			d='M9.886 6.114 6.114 9.886m0 0h3.3m-3.3 0v-3.3M14 2.4v11.2a.4.4 0 0 1-.4.4H2.4a.4.4 0 0 1-.4-.4V2.4c0-.22.18-.4.4-.4h11.2c.22 0 .4.18.4.4'
		/>
	</svg>
);
export default SvgArrowDownLeftSquare;
