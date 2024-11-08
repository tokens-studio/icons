import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgVials = ({
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
			d='M14 14H2M6 8H3.333M12.667 8H10M4.667 12a1.333 1.333 0 0 1-1.334-1.333V2H6v8.667C6 11.403 5.403 12 4.667 12M11.333 12A1.333 1.333 0 0 1 10 10.667V2h2.667v8.667c0 .736-.597 1.333-1.334 1.333'
		/>
	</svg>
);
export default SvgVials;
