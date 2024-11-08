import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFlip = ({
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
			d='M6.333 13.333h-5l5-10.666zM13.417 13.333h1.25L14.042 12M10.917 13.333h-1.25V12M9.667 8v1.333M12.167 8l.625 1.333M10.917 5.333l-1.25-2.666v2.666'
		/>
	</svg>
);
export default SvgFlip;
