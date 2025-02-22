import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgInputSearch = ({
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
			d='M14 8.00004V6.66671C14 4.82576 12.5076 3.33337 10.6667 3.33337H5.33333C3.49239 3.33337 2 4.82576 2 6.66671C2 8.50764 3.49239 10 5.33333 10H8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.4161 12.7457C13.7769 12.3839 14 11.8847 14 11.3334C14 10.2288 13.1046 9.33337 12 9.33337C10.8954 9.33337 10 10.2288 10 11.3334C10 12.438 10.8954 13.3334 12 13.3334C12.5533 13.3334 13.054 13.1087 13.4161 12.7457ZM13.4161 12.7457L14.6667 14'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgInputSearch;
