import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGridXmark = ({
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
			d='M9.91431 12.7476L11.3285 11.3334M11.3285 11.3334L12.7428 9.91919M11.3285 11.3334L9.91431 9.91919M11.3285 11.3334L12.7428 12.7476'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.66675 6.26663V3.06663C2.66675 2.84571 2.84583 2.66663 3.06675 2.66663H6.26675C6.48766 2.66663 6.66675 2.84571 6.66675 3.06663V6.26663C6.66675 6.48754 6.48766 6.66663 6.26675 6.66663H3.06675C2.84583 6.66663 2.66675 6.48754 2.66675 6.26663Z'
			stroke='currentColor'
		/>
		<path
			d='M2.66675 12.9334V9.73337C2.66675 9.51244 2.84583 9.33337 3.06675 9.33337H6.26675C6.48766 9.33337 6.66675 9.51244 6.66675 9.73337V12.9334C6.66675 13.1543 6.48766 13.3334 6.26675 13.3334H3.06675C2.84583 13.3334 2.66675 13.1543 2.66675 12.9334Z'
			stroke='currentColor'
		/>
		<path
			d='M9.33325 6.26663V3.06663C9.33325 2.84571 9.51232 2.66663 9.73325 2.66663H12.9333C13.1542 2.66663 13.3333 2.84571 13.3333 3.06663V6.26663C13.3333 6.48754 13.1542 6.66663 12.9333 6.66663H9.73325C9.51232 6.66663 9.33325 6.48754 9.33325 6.26663Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgGridXmark;
