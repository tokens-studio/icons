import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEllipse3DThreePoints = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={18}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M3.333 3a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M3.333 15.667h5.334M3.333 15.667V2.333'
		/>
		<path
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M3.333 16.333a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333'
		/>
		<path
			stroke='currentColor'
			strokeDasharray='3 3'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M5.333 3.796c.913-.915 2.072-1.463 3.334-1.463C11.612 2.333 14 5.318 14 9c0 2.18-.838 4.117-2.133 5.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M5.466 14.333a6 6 0 0 1-.8-.923'
		/>
		<path
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8.667 16.333a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333'
		/>
	</svg>
);
export default SvgEllipse3DThreePoints;
