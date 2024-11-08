import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTableRows = ({
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
			d='M2 8h12M2 8v3m0-3V5m12 3v3m0-3V5M2 11v2.6c0 .22.18.4.4.4h11.2a.4.4 0 0 0 .4-.4V11M2 11h12M2 5V2.4c0-.22.18-.4.4-.4h11.2c.22 0 .4.18.4.4V5M2 5h12'
		/>
	</svg>
);
export default SvgTableRows;
