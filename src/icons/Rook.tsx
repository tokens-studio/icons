import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgRook = ({
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
			strokeWidth={1.5}
			d='M4.667 10.667h6.666M6 7.333h4M6.667 2.667V4M9.333 2.667V4M11.6 6H4.4a.4.4 0 0 1-.4-.4V3.067c0-.221.18-.4.4-.4h7.2c.22 0 .4.179.4.4V5.6a.4.4 0 0 1-.4.4Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M11.934 14H4.066a.41.41 0 0 1-.348-.622c.81-1.337 2.615-4.493 2.615-6.045V6.4c0-.221.18-.4.4-.4h2.534a.4.4 0 0 1 .4.4v.933c0 1.552 1.805 4.708 2.615 6.045a.41.41 0 0 1-.348.622Z'
		/>
	</svg>
);
export default SvgRook;
