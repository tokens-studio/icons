import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLockSlash = ({
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
			d='M7.667 8H4.4a.4.4 0 0 0-.4.4v4.533c0 .221.18.4.4.4h7.2a.4.4 0 0 0 .4-.4v-.6M10.667 8V5.333c0-.889-.534-2.666-2.667-2.666-.498 0-.909.096-1.246.256M10.667 8h.933c.221 0 .4.18.4.4v.267M5.333 5.333V8M2 2l12 12'
		/>
	</svg>
);
export default SvgLockSlash;
