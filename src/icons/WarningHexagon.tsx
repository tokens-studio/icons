import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWarningHexagon = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
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
			d='M1.782 8.2a.4.4 0 0 1 0-.4l3.436-5.95a.4.4 0 0 1 .346-.2h6.872a.4.4 0 0 1 .346.2l3.436 5.95a.4.4 0 0 1 0 .4l-3.436 5.95a.4.4 0 0 1-.346.2H5.564a.4.4 0 0 1-.346-.2zM9 5.333V8M9 10.673l.007-.007'
		/>
	</svg>
);
export default SvgWarningHexagon;
