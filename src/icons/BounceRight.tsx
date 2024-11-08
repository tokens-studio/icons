import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBounceRight = ({
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
			d='M12.667 4.667a1.333 1.333 0 1 1 0-2.667 1.333 1.333 0 0 1 0 2.667M2.667 10.333c2-.666 3.666-.333 5.333 3 .333-2 1.333-5 2.333-6.666'
		/>
	</svg>
);
export default SvgBounceRight;
