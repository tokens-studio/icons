import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgVrTag = ({
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
			d='M1.33325 10V6C1.33325 3.79086 3.12411 2 5.33325 2H10.6666C12.8757 2 14.6666 3.79086 14.6666 6V10C14.6666 12.2091 12.8757 14 10.6666 14H5.33325C3.12411 14 1.33325 12.2091 1.33325 10Z'
			stroke='currentColor'
		/>
		<path
			d='M8.66675 10.3334V8.46675M8.66675 8.46675V5.66675H10.5715C11.0477 5.66675 12.0001 5.66675 12.0001 7.06675C12.0001 8.46675 11.0477 8.46675 10.5715 8.46675M8.66675 8.46675C8.98421 8.46675 9.80961 8.46675 10.5715 8.46675M10.5715 8.46675L12.0001 10.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33325 5.66675L5.33325 10.3334L3.33325 5.66675'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgVrTag;
