import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgArrowsUpFromLine = ({
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
			d='M2 13.333h12M4 11.333V2.667m0 0L1.333 5.333M4 2.667l2.667 2.666M12 11.333V2.667m0 0L9.333 5.333M12 2.667l2.667 2.666'
		/>
	</svg>
);
export default SvgArrowsUpFromLine;
