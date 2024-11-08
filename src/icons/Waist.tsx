import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWaist = ({
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
			d='M12.267 2.667S11.2 5.167 11.2 7.238c0 .663.227 1.218.533 1.77.353.637.81 1.27 1.145 2.061.266.628.455 1.356.455 2.264M3.733 2.667S4.8 5.167 4.8 7.238c0 .663-.227 1.218-.533 1.77-.353.637-.81 1.27-1.145 2.061a5.7 5.7 0 0 0-.455 2.264M4.267 9.009h7.466'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M3.122 11.07s3.811.74 4.878 2.263c1.067-1.523 4.878-2.264 4.878-2.264'
		/>
	</svg>
);
export default SvgWaist;
