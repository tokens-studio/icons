import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFloppyDisk = ({
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
			d='M2 12.667V3.333C2 2.597 2.597 2 3.333 2h7.448c.354 0 .693.14.943.39l1.886 1.886c.25.25.39.59.39.943v7.448c0 .736-.597 1.333-1.333 1.333H3.333A1.333 1.333 0 0 1 2 12.667Z'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M5.733 6h4.534a.4.4 0 0 0 .4-.4V2.4a.4.4 0 0 0-.4-.4H5.733a.4.4 0 0 0-.4.4v3.2c0 .22.18.4.4.4ZM4 9.067V14h8V9.067a.4.4 0 0 0-.4-.4H4.4a.4.4 0 0 0-.4.4Z'
		/>
	</svg>
);
export default SvgFloppyDisk;
