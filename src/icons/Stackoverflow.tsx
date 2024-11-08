import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgStackoverflow = ({
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
			d='M12.667 10v4H3.333v-4M10.667 11.333H5.333M10.608 9.776l-5.216-1.11M11.142 8.254 6.308 6M12.115 7.095 8.03 3.667M13.356 5.87l-3.284-4.203'
		/>
	</svg>
);
export default SvgStackoverflow;
