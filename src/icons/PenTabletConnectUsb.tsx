import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPenTabletConnectUsb = ({
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
			d='M14.667 4.667V3.333c0-.736-.597-1.333-1.334-1.333H2.667c-.737 0-1.334.597-1.334 1.333v9.334c0 .736.597 1.333 1.334 1.333h10.666c.737 0 1.334-.597 1.334-1.333v-1.334'
		/>
		<path stroke='currentColor' strokeWidth={1.5} d='M1.333 8H4M4 2v12' />
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M12.833 8h-5.5M12.467 8l-.55 2h-1.1M11.733 8 11 6H9.717M14.667 8c0-.502-.41-.91-.917-.91a.913.913 0 0 0-.917.91c0 .502.41.91.917.91a.913.913 0 0 0 .917-.91'
		/>
	</svg>
);
export default SvgPenTabletConnectUsb;
