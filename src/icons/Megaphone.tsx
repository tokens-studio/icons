import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMegaphone = ({
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
			d='M9.333 9.333V4m0 5.333 4.069 2.325a.4.4 0 0 0 .598-.347V2.023a.4.4 0 0 0-.598-.348L9.333 4m0 5.333H4.667a2.667 2.667 0 0 1 0-5.333h4.666M5.171 12.867l-.504-3.534h2.666l.452 3.16a1.32 1.32 0 0 1-2.614.374Z'
		/>
	</svg>
);
export default SvgMegaphone;
