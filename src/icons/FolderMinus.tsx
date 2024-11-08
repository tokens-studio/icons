import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFolderMinus = ({
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
			d='M12 4h2.667M14.267 13.333H1.733a.4.4 0 0 1-.4-.4v-5.6h12.934c.22 0 .4.18.4.4v5.2a.4.4 0 0 1-.4.4M1.333 7.333V3.067c0-.221.18-.4.4-.4h4.12a.4.4 0 0 1 .26.096L8.22 4.57a.4.4 0 0 0 .26.097h.852'
		/>
	</svg>
);
export default SvgFolderMinus;
