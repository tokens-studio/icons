import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgIpAddressTag = ({
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
			d='M1.33337 10V6C1.33337 3.79086 3.12423 2 5.33337 2H10.6667C12.8758 2 14.6667 3.79086 14.6667 6V10C14.6667 12.2091 12.8758 14 10.6667 14H5.33337C3.12423 14 1.33337 12.2091 1.33337 10Z'
			stroke='currentColor'
		/>
		<path
			d='M8 6V10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6 6V10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.99988 8H9.66661C10.2189 8 10.6666 7.55227 10.6666 7C10.6666 6.44771 10.2189 6 9.66661 6H7.99994'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgIpAddressTag;
