import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTextArrowsUpDown = ({
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
			d='M12 14V7.333M12 14l-1.333-1.667M12 14l1.333-1.667m-1.333-5-1.333 1.334M12 7.333l1.333 1.334M6 3.333v8m0 0H4.667m1.333 0h1.333M10 4.667V3.333H2v1.334'
		/>
	</svg>
);
export default SvgTextArrowsUpDown;
