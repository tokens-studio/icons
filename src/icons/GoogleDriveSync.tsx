import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGoogleDriveSync = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={17}
		height={17}
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
			d='M6.095 2.003 9.905 2m-3.81.002-4.762 8m4.762-8 3.268 6.331M9.905 2 3.717 14M9.905 2l3.57 6M1.333 10.002 3.717 14m-2.384-3.998h7M3.717 14h4.285M15.11 11.778C14.699 10.73 13.757 10 12.66 10c-1.172 0-2.168.836-2.529 2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M13.997 11.848h.936a.4.4 0 0 0 .4-.4v-1.081M10.222 13.556c.413 1.046 1.355 1.777 2.451 1.777 1.172 0 2.169-.836 2.53-2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M11.337 13.485H10.4a.4.4 0 0 0-.4.4v1.082'
		/>
	</svg>
);
export default SvgGoogleDriveSync;
