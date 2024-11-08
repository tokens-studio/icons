import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBinHalf = ({
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
			d='M2.026 2.863a.33.33 0 0 1 .128-.32c.464-.33 2.055-1.21 5.846-1.21s5.382.88 5.846 1.21a.33.33 0 0 1 .128.32l-1.133 8.496a2.67 2.67 0 0 1-1.32 1.962l-.213.122a6.67 6.67 0 0 1-6.616 0l-.213-.122a2.67 2.67 0 0 1-1.32-1.963z'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M2 3.333c1.714 1.778 10.286 1.778 12 0M7.333 12l2-2.333m0 0 3.334 1.666M9.333 9.667l4-2M3 10.667l2.157-.309a.4.4 0 0 1 .313.09L7.333 12l2 2M5.333 10.333 7.077 8.3a.4.4 0 0 1 .56-.047l1.696 1.414'
		/>
	</svg>
);
export default SvgBinHalf;
