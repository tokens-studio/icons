import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSparks = ({
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
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M5.333 10C8.583 10 10 8.633 10 5.333 10 8.633 11.407 10 14.667 10 11.407 10 10 11.407 10 14.667 10 11.407 8.583 10 5.333 10ZM1.333 4.333c2.09 0 3-.879 3-3 0 2.121.905 3 3 3-2.095 0-3 .905-3 3 0-2.095-.91-3-3-3Z'
		/>
	</svg>
);
export default SvgSparks;
