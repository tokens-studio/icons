import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgShoppingCode = ({
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
			d='M4 3.333v1.334M6.667 3.333v4M12 3.333V4M4 6.667v4M4 12.333v.334M6.667 12.333v.334M9.333 12.333v.334M12 12.333v.334M6.667 9.333v1.334M9.333 8.667v2M9.333 3.333v3.334M12 6v4.667'
		/>
	</svg>
);
export default SvgShoppingCode;
