import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPentagon = ({
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
			d='M7.765 1.504a.4.4 0 0 1 .47 0L14.74 6.23a.4.4 0 0 1 .146.447L12.4 14.323a.4.4 0 0 1-.38.276H3.98a.4.4 0 0 1-.38-.276L1.115 6.677a.4.4 0 0 1 .146-.447z'
		/>
	</svg>
);
export default SvgPentagon;
