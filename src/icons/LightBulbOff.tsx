import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLightBulbOff = ({
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
			d='M6 12h4M6.667 14h2.666M11 7.667c.666-.667.984-1.342 1-2.334C12.032 3.3 10.667 2 8 2c-.778 0-1.446.11-2 .318M6 10c0-1.333-.333-1.667-1-2.333s-.984-1.342-1-2.334a3.8 3.8 0 0 1 .112-1M2 2l12 12'
		/>
	</svg>
);
export default SvgLightBulbOff;
