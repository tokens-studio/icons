import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgScissorAlt = ({
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
			d='M6.824 5.333a2 2 0 1 0-2.981-2.667 2 2 0 0 0 2.981 2.667m0 0 6.51 5.334M6.824 10.667a2 2 0 1 1-2.981 2.667 2 2 0 0 1 2.981-2.667m0 0 6.51-5.334'
		/>
	</svg>
);
export default SvgScissorAlt;
