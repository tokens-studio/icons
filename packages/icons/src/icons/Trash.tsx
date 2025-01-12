import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTrash = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M13.3334 6L12.0034 13.5642C11.8913 14.2017 11.3375 14.6667 10.6902 14.6667H5.30985C4.66255 14.6667 4.10875 14.2017 3.99666 13.5642L2.66669 6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 3.99992H10.25M10.25 3.99992V2.66659C10.25 1.93021 9.65307 1.33325 8.91667 1.33325H7.08333C6.34695 1.33325 5.75 1.93021 5.75 2.66659V3.99992M10.25 3.99992H5.75M2 3.99992H5.75'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgTrash;
