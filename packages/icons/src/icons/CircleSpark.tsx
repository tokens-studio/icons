import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCircleSpark = ({
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
			d='M14.6666 7.99998C14.6666 11.6818 11.6818 14.6666 7.99998 14.6666C4.31808 14.6666 1.33331 11.6818 1.33331 7.99998C1.33331 4.31808 4.31808 1.33331 7.99998 1.33331'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.66669 4.33331C10.7559 4.33331 11.6667 3.45433 11.6667 1.33331C11.6667 3.45433 12.5712 4.33331 14.6667 4.33331C12.5712 4.33331 11.6667 5.23777 11.6667 7.33331C11.6667 5.23777 10.7559 4.33331 8.66669 4.33331Z'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCircleSpark;
