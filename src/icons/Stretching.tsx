import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgStretching = ({
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
			d='M10.667 4.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667M3.333 13.333l3.273-.349 1.818-3.492L9.152 6l-3.273.698 1.09 1.397M9.879 10.19h1.454v3.143'
		/>
	</svg>
);
export default SvgStretching;
