import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPhonePlus = ({
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
			d='M10.828 3.495h2m0 0h2m-2 0v-2m0 2v2M12.079 9.801l-2.746.532c-1.854-.93-3-2-3.666-3.666l.513-2.754-.97-2.58h-2.5c-.753 0-1.345.622-1.232 1.365.28 1.855 1.106 5.22 3.522 7.635 2.537 2.537 6.19 3.638 8.201 4.076.777.168 1.466-.437 1.466-1.232v-2.39z'
		/>
	</svg>
);
export default SvgPhonePlus;
