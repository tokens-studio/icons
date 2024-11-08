import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWind = ({
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
			d='M12.186 4.667c1.002 0 1.814.746 1.814 1.666S13.188 8 12.186 8H2M11.958 13.333c.76 0 1.709-.333 1.709-1.666 0-1.334-.95-1.667-1.709-1.667H2M6.941 2.667c.953 0 1.726.746 1.726 1.666S7.894 6 6.94 6H2'
		/>
	</svg>
);
export default SvgWind;
