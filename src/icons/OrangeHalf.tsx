import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgOrangeHalf = ({
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
			d='M8 14.667c3.667 0 6.667-3 6.667-6.667s-3-6.667-6.667-6.667m0 13.334c-3.667 0-6.667-3-6.667-6.667s3-6.667 6.667-6.667m0 13.334V8m0-6.667V8m0 0 3.333 3.667M8 8l3.333-3.333M8 8h4.667'
		/>
	</svg>
);
export default SvgOrangeHalf;
