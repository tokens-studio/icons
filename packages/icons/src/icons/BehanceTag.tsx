import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBehanceTag = ({
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
			d='M14 5.33333V10.6667C14 12.5076 12.5076 14 10.6667 14H5.33333C3.49239 14 2 12.5076 2 10.6667V5.33333C2 3.49239 3.49239 2 5.33333 2H10.6667C12.5076 2 14 3.49239 14 5.33333Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.06573 7.88408C7.75587 7.88408 7.75587 10.6667 6.06573 10.6667C5.11233 10.6667 4 10.6667 4 10.6667V7.88408M6.06573 7.88408C5.11233 7.88408 4 7.88408 4 7.88408M6.06573 7.88408C7.75587 7.88408 7.75587 5.33334 6.06573 5.33334C5.31455 5.33334 4 5.33334 4 5.33334V7.88408'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.3334 7.33334C9.41295 7.33334 8.66675 8.07954 8.66675 9.00001H12.0001C12.0001 8.07954 11.2539 7.33334 10.3334 7.33334Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.66675 9C8.66675 9.92047 9.41295 10.6667 10.3334 10.6667C10.9518 10.6667 11.3271 10.4517 11.5418 10.2535'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3333 5.66666H9.33325'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBehanceTag;
