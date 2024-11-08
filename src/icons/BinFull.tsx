import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBinFull = ({
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
			d='m12.841 11.359 1.118-8.384a.4.4 0 0 0-.248-.424l-3.044-1.218H7l-.454 1-3.213-1L2.14 2.527a.4.4 0 0 0-.114.336l1.133 8.496c.11.824.598 1.55 1.32 1.962l.213.122a6.67 6.67 0 0 0 6.616 0l.213-.122a2.67 2.67 0 0 0 1.32-1.963ZM10.667 1.333 9.333 4.667M6 4.333l.545-2'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M2 3.333c1.714 1.778 10.286 1.778 12 0'
		/>
	</svg>
);
export default SvgBinFull;
