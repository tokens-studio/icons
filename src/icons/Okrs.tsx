import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgOkrs = ({
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
			d='M12 9.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666M12 4.667A1.333 1.333 0 1 0 12 2a1.333 1.333 0 0 0 0 2.667M2 3.333h6.667M2 8h6.667M2 12.667h6.667M10.667 14.162l1.414-1.414m0 0 1.414-1.415m-1.414 1.415-1.414-1.415m1.414 1.415 1.414 1.414'
		/>
	</svg>
);
export default SvgOkrs;
