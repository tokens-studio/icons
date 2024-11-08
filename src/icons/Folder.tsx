import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFolder = ({
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
			d='M1.333 7.333V3.067c0-.221.18-.4.4-.4h4.12a.4.4 0 0 1 .26.096L8.22 4.57a.4.4 0 0 0 .26.097h5.786c.22 0 .4.179.4.4v2.266m-13.334 0v5.6c0 .221.18.4.4.4h12.534a.4.4 0 0 0 .4-.4v-5.6m-13.334 0h13.334'
		/>
	</svg>
);
export default SvgFolder;
