import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMultiBubble = ({
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
			d='M4.99992 14.6667C7.02499 14.6667 8.66659 13.0251 8.66659 11C8.66659 8.97497 7.02499 7.33337 4.99992 7.33337C2.97487 7.33337 1.33325 8.97497 1.33325 11C1.33325 11.6679 1.51181 12.294 1.82379 12.8334L1.51659 14.4834L3.16659 14.1762C3.70591 14.4882 4.33206 14.6667 4.99992 14.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.1881 11.9319C10.839 11.827 11.4504 11.6044 11.9999 11.2865L14.3999 11.7334L13.953 9.33337C14.4068 8.54891 14.6665 7.63811 14.6665 6.66671C14.6665 3.72119 12.2787 1.33337 9.33321 1.33337C6.64829 1.33337 4.42676 3.31736 4.05469 5.89927'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMultiBubble;
