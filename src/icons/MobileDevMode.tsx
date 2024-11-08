import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMobileDevMode = ({
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
			d='m8 12.673.007-.007'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M12 12v2.267a.4.4 0 0 1-.4.4H4.4a.4.4 0 0 1-.4-.4V12M12 4V1.733a.4.4 0 0 0-.4-.4H4.4a.4.4 0 0 0-.4.4V4'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10.333 5.667 12.667 8l-2.334 2.333M5.667 5.667 3.333 8l2.334 2.333'
		/>
	</svg>
);
export default SvgMobileDevMode;
