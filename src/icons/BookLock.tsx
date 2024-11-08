import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBookLock = ({
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
			d='M2.667 12.667V3.333C2.667 2.597 3.264 2 4 2h8.933c.221 0 .4.18.4.4v8.743'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M9.333 6.667H9.6c.22 0 .4.179.4.4v1.866a.4.4 0 0 1-.4.4H6.4a.4.4 0 0 1-.4-.4V7.067c0-.221.18-.4.4-.4h.267m2.666 0V5.333C9.333 4.89 9.067 4 8 4s-1.333.889-1.333 1.333v1.334m2.666 0H6.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M4 11.333h9.333M4 14h9.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M4 14a1.333 1.333 0 1 1 0-2.667'
		/>
	</svg>
);
export default SvgBookLock;
