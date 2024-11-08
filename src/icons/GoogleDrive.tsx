import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGoogleDrive = ({
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
			d='M6.095 2.003 9.905 2m-3.81.002-4.762 8m4.762-8L12.288 14M9.905 2l4.762 8.002M9.905 2 3.717 14m-2.384-3.998L3.717 14m-2.384-3.998h13.334M12.288 14H3.717m8.571 0 2.379-3.998'
		/>
	</svg>
);
export default SvgGoogleDrive;
