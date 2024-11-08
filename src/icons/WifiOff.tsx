import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWifiOff = ({
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
			d='m8 13.007.007-.008M2 2l12 12M1.333 5.333a11.4 11.4 0 0 1 2.505-1.426m10.829 1.426c-2.382-1.786-5.236-2.509-8-2.168M3.333 8a7.5 7.5 0 0 1 3.013-1.333M12.666 8a7.5 7.5 0 0 0-2.854-1.3M5.667 10.333c1.5-.933 3.166-.933 4.666 0'
		/>
	</svg>
);
export default SvgWifiOff;
