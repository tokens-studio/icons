import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFloppyDiskArrowIn = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={17}
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
			d='M3 5V3.333C3 2.597 3.597 2 4.333 2h7.448c.354 0 .693.14.943.39l1.886 1.886c.25.25.39.59.39.943v7.448c0 .736-.597 1.333-1.333 1.333H4.333A1.333 1.333 0 0 1 3 12.667V11M5 14v-2.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M13 14V9.067a.4.4 0 0 0-.4-.4H11M11.667 2v3.6a.4.4 0 0 1-.4.4H10M6.333 2v2M1.667 8H9m0 0L7 6m2 2-2 2'
		/>
	</svg>
);
export default SvgFloppyDiskArrowIn;
