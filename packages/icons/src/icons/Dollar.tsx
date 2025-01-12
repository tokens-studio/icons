import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDollar = ({
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
			d='M10.7692 4.76921C10.137 4.13692 9.02344 3.69712 8.00004 3.66958M8.00004 3.66958C6.78237 3.63681 5.69237 4.18767 5.69237 5.6923C5.69237 8.46153 10.7692 7.07693 10.7692 9.84613C10.7692 11.4255 9.41804 12.1041 8.00004 12.0532M8.00004 3.66958V2M5.23083 10.7692C5.82574 11.5624 6.93184 12.0148 8.00004 12.0532M8.00004 12.0532V13.9999'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgDollar;
