import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBorderRadius = ({
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
			fill='currentColor'
			fillRule='evenodd'
			d='M1.798 9.201a6.75 6.75 0 0 1 6.75-6.75h5.654v1.5H8.548a5.25 5.25 0 0 0-5.25 5.25v4.344h-1.5V9.2m4.417 1.043a3.75 3.75 0 0 1 3.75-3.75h4.237v1.5H9.965a2.25 2.25 0 0 0-2.25 2.25v3.3h-1.5v-3.3m7.237 1.787h.75v-1.5h-3.3a.75.75 0 0 0-.75.75v2.268h1.5V12.03z'
			clipRule='evenodd'
		/>
	</svg>
);
export default SvgBorderRadius;
