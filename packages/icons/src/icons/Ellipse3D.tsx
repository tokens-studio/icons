import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEllipse3D = ({
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
			d='M7.99998 3.00002C8.36818 3.00002 8.66665 2.70154 8.66665 2.33335C8.66665 1.96517 8.36818 1.66669 7.99998 1.66669C7.63178 1.66669 7.33331 1.96517 7.33331 2.33335C7.33331 2.70154 7.63178 3.00002 7.99998 3.00002Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00002 15.6666C10.9456 15.6666 13.3334 12.6818 13.3334 8.99998C13.3334 5.31808 10.9456 2.33331 8.00002 2.33331C5.0545 2.33331 2.66669 5.31808 2.66669 8.99998C2.66669 12.6818 5.0545 15.6666 8.00002 15.6666Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.99998 16.3333C8.36818 16.3333 8.66665 16.0349 8.66665 15.6667C8.66665 15.2985 8.36818 15 7.99998 15C7.63178 15 7.33331 15.2985 7.33331 15.6667C7.33331 16.0349 7.63178 16.3333 7.99998 16.3333Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgEllipse3D;
