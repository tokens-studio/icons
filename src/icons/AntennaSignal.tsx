import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAntennaSignal = ({
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
			d='M12.667 5.333s1 1 1 2.667-1 2.667-1 2.667M14.667 3.333S16.333 5 16.333 8s-1.666 4.667-1.666 4.667M5.333 5.333s-1 1-1 2.667 1 2.667 1 2.667M3.333 3.333S1.667 5 1.667 8s1.666 4.667 1.666 4.667'
		/>
		<path
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M9 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334'
		/>
	</svg>
);
export default SvgAntennaSignal;
