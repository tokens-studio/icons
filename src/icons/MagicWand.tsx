import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMagicWand = ({
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
			d='m2 14 6.667-6.667M12 4l-1.667 1.667'
		/>
		<path
			stroke='currentColor'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m6.333 1.333.63 1.703 1.704.63-1.703.63L6.334 6l-.63-1.703L4 3.667l1.703-.63zM12.667 6.667l.36.973L14 8l-.973.36-.36.973-.36-.973-.974-.36.973-.36z'
		/>
	</svg>
);
export default SvgMagicWand;
