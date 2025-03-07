import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMediaImageList = ({
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
			d='M14.0001 5.06663V13.6C14.0001 13.8209 13.821 14 13.6001 14H5.06675C4.84583 14 4.66675 13.8209 4.66675 13.6V5.06663C4.66675 4.84571 4.84583 4.66663 5.06675 4.66663H13.6001C13.821 4.66663 14.0001 4.84571 14.0001 5.06663Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.0001 2.66663H3.06675C2.84583 2.66663 2.66675 2.84571 2.66675 3.06663V12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66675 11.2L8.29635 10L14.0001 12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11 8.66663C10.4477 8.66663 10 8.21889 10 7.66663C10 7.11436 10.4477 6.66663 11 6.66663C11.5523 6.66663 12 7.11436 12 7.66663C12 8.21889 11.5523 8.66663 11 8.66663Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMediaImageList;
