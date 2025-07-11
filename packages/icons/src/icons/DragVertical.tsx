import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDragVertical = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 24}
		height={props.height || 24}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (24 / (Number(props.width) || 24))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M16.5 6C17.0523 6 17.5 5.55228 17.5 5C17.5 4.44772 17.0523 4 16.5 4C15.9477 4 15.5 4.44772 15.5 5C15.5 5.55228 15.9477 6 16.5 6Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M16.5 13C17.0523 13 17.5 12.5523 17.5 12C17.5 11.4477 17.0523 11 16.5 11C15.9477 11 15.5 11.4477 15.5 12C15.5 12.5523 15.9477 13 16.5 13Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M16.5 20C17.0523 20 17.5 19.5523 17.5 19C17.5 18.4477 17.0523 18 16.5 18C15.9477 18 15.5 18.4477 15.5 19C15.5 19.5523 15.9477 20 16.5 20Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.5 6C8.05228 6 8.5 5.55228 8.5 5C8.5 4.44772 8.05228 4 7.5 4C6.94772 4 6.5 4.44772 6.5 5C6.5 5.55228 6.94772 6 7.5 6Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.5 13C8.05228 13 8.5 12.5523 8.5 12C8.5 11.4477 8.05228 11 7.5 11C6.94772 11 6.5 11.4477 6.5 12C6.5 12.5523 6.94772 13 7.5 13Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.5 20C8.05228 20 8.5 19.5523 8.5 19C8.5 18.4477 8.05228 18 7.5 18C6.94772 18 6.5 18.4477 6.5 19C6.5 19.5523 6.94772 20 7.5 20Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgDragVertical;
