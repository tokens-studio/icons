import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgShirt = ({
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
			d='M4 2.667h2s0 2 2 2 2-2 2-2h2m0 4.666v5.6a.4.4 0 0 1-.4.4H4.4a.4.4 0 0 1-.4-.4v-5.6M12 2.667l2.962 1.184a.4.4 0 0 1 .223.52L14.1 7.081a.4.4 0 0 1-.372.252H12M4 2.667 1.038 3.85a.4.4 0 0 0-.223.52L1.9 7.081a.4.4 0 0 0 .372.252H4'
		/>
	</svg>
);
export default SvgShirt;
