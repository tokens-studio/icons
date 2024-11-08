import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHomeTemperatureOut = ({
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
			d='m9.333 5.333-6.459-3.23a.4.4 0 0 0-.4.026l-.807.538M8 7.333v5.334C8 13.403 7.403 14 6.667 14h-2m0 0H2.4a.4.4 0 0 1-.4-.4v-3.2c0-.22.18-.4.4-.4h1.867c.22 0 .4.18.4.4zM12.667 12a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667M12.667 5v4.333M12.667 8H14M12.667 6H14'
		/>
	</svg>
);
export default SvgHomeTemperatureOut;
