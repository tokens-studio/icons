import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgProjectCurve3D = ({
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
			d='M8 14c-3.314 0-6-1.194-6-2.667s2.686-2.666 6-2.666 6 1.194 6 2.666C14 12.806 11.314 14 8 14M8 1.333a2 2 0 0 1 2 2V4H6v-.667a2 2 0 0 1 2-2M2.333 10.333 5 5.667M13.667 10.333 11 5.667'
		/>
	</svg>
);
export default SvgProjectCurve3D;
