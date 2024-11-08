import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBag = ({
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
			strokeWidth={1.5}
			d='M3.006 13.333h9.988A.4.4 0 0 0 13.39 13l1.2-7.2a.4.4 0 0 0-.395-.466H1.806a.4.4 0 0 0-.395.466l1.2 7.2a.4.4 0 0 0 .394.334ZM4.667 5.333V4c0-.736.597-1.333 1.333-1.333h4c.736 0 1.333.597 1.333 1.333v1.333'
		/>
	</svg>
);
export default SvgBag;
