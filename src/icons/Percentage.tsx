import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPercentage = ({
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
			d='M11.333 12.667a1.333 1.333 0 1 1 0-2.667 1.333 1.333 0 0 1 0 2.667M4.667 6a1.333 1.333 0 1 1 0-2.667 1.333 1.333 0 0 1 0 2.667M12.667 3.333l-9.334 9.334'
		/>
	</svg>
);
export default SvgPercentage;
