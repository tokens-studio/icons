import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGoogleDriveWarning = ({
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
			d='M6.095 2.003 9.905 2m-3.81.002-4.762 8m4.762-8 3.268 6.331M9.905 2 3.717 14M9.905 2l4.428 7.333m-13 .67L3.717 14m-2.384-3.998h7M3.717 14h4.285M12 10.667V12M12 14.673l.007-.007'
		/>
	</svg>
);
export default SvgGoogleDriveWarning;
