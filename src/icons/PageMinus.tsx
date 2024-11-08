import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPageMinus = ({
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
			d='M2.667 8V1.733c0-.22.179-.4.4-.4h7.767a.4.4 0 0 1 .283.118l2.1 2.099a.4.4 0 0 1 .116.282v10.435a.4.4 0 0 1-.4.4h-5.6'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10.667 1.333V3.6c0 .22.179.4.4.4h2.266M1.328 12.667h4'
		/>
	</svg>
);
export default SvgPageMinus;
