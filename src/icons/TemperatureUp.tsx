import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTemperatureUp = ({
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
			d='M2.667 8a3.333 3.333 0 1 0 4 0M2.667 8V2h4v6M6.667 2H8M6.667 4H8M6.667 6H8'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M4.667 9.333a1.333 1.333 0 1 0 0 2.667 1.333 1.333 0 0 0 0-2.667m0 0V4M12.667 12V4m0 0 1.666 1.667M12.667 4 11 5.667'
		/>
	</svg>
);
export default SvgTemperatureUp;
