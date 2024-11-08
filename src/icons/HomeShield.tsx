import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHomeShield = ({
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
			d='M8.335 6.087 9.7 6.44a.39.39 0 0 1 .295.387C9.885 10.155 8 10.667 8 10.667s-1.884-.512-1.995-3.839a.39.39 0 0 1 .295-.387l1.365-.354c.22-.057.45-.057.67 0M1.333 5.333 7.821 2.09a.4.4 0 0 1 .358 0l6.488 3.244'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M13.333 7.333v5.334c0 .736-.597 1.333-1.333 1.333H4a1.333 1.333 0 0 1-1.333-1.333V7.333'
		/>
	</svg>
);
export default SvgHomeShield;
