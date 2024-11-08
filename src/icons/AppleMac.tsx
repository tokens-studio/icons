import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAppleMac = ({
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
			d='M10.667 1.333c.242 1.453-1.275 2.554-2.123 3.048-.25.146-.533-.04-.49-.326.146-.962.675-2.722 2.613-2.722Z'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M6 4.333c.598 0 1.127.133 1.53.28a2.4 2.4 0 0 0 1.607 0c.403-.147.932-.28 1.53-.28.723 0 1.643.393 2.333 1.178-2.333 1.822-1.667 4.822.513 5.617-.696 1.912-2.019 3.205-3.18 3.205-1 0-1-.466-2-.466s-1 .466-2 .466c-1.666 0-3.666-2.666-3.666-6 0-2.666 2-4 3.333-4Z'
		/>
	</svg>
);
export default SvgAppleMac;
