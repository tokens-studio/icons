import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgStarHalfDashed = ({
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
			d='M8.543 2.003a.608.608 0 0 0-1.086 0l-.33.665M8 12.452 6.952 13M3.781 12.913l-.123.715a.605.605 0 0 0 .879.635l.565-.296M4.168 10.667l.15-.872-.462-.449M2.466 8l-.949-.919a.602.602 0 0 1 .335-1.028l.74-.107M4.667 5.644l1.058-.153.535-1.08'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10.275 5.49 8.543 2.004A.6.6 0 0 0 8 1.667v10.785l3.463 1.81a.605.605 0 0 0 .88-.634l-.662-3.833 2.802-2.714a.602.602 0 0 0-.335-1.027z'
		/>
	</svg>
);
export default SvgStarHalfDashed;
