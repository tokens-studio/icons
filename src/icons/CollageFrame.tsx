import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCollageFrame = ({
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
			d='M12.933 13.333H3.067a.4.4 0 0 1-.4-.4V3.067c0-.221.179-.4.4-.4h9.866c.221 0 .4.179.4.4v9.866a.4.4 0 0 1-.4.4ZM7.333 8V2.667M2.667 8h10.666'
		/>
	</svg>
);
export default SvgCollageFrame;
