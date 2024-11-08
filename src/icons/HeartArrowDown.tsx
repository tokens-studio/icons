import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHeartArrowDown = ({
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
			d='m3.652 9.922-1.216-1.26c-1.47-1.524-1.47-3.984 0-5.508a3.72 3.72 0 0 1 5.387 0L8 3.338l.177-.184A3.74 3.74 0 0 1 10.87 2c1.013 0 1.982.416 2.694 1.154a3.97 3.97 0 0 1 1.103 2.754 3.97 3.97 0 0 1-1.103 2.754q-.602.626-1.2 1.26M8 14.333v-7M10.667 11.667 8 14.333l-2.667-2.666'
		/>
	</svg>
);
export default SvgHeartArrowDown;
