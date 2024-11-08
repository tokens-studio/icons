import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgStarDashed = ({
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
			d='m9.204 3.333-.66-1.33a.608.608 0 0 0-1.087 0l-.33.665M10.007 4.951l.268.54.968.14M13.18 5.913l.968.14c.497.073.695.68.335 1.028l-.7.679M12.382 9.116l-.7.679.165.958M12.177 12.67l.165.957a.605.605 0 0 1-.879.636l-.866-.453M6.952 13 8 12.452l.866.453M3.781 12.913l-.123.715a.605.605 0 0 0 .879.635l.565-.296M4.168 10.667l.15-.872-.462-.449M2.466 8l-.949-.919a.602.602 0 0 1 .335-1.028l.74-.107M4.667 5.644l1.058-.153.535-1.08'
		/>
	</svg>
);
export default SvgStarDashed;
