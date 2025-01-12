import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPineTree = ({
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
			d='M8.00008 1.33337L4.66675 4.42861C4.66675 4.42861 6.69501 4.66671 8.00008 4.66671C9.30515 4.66671 11.3334 4.42861 11.3334 4.42861L8.00008 1.33337Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.66659 4.66663L3.33325 7.29289C3.33325 7.29289 5.08325 7.99996 7.99992 7.99996C10.9166 7.99996 12.6666 7.29289 12.6666 7.29289L10.3333 4.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.33333 7.66663L2 10.3487C2 10.3487 3.8 12 8 12C12.2 12 14 10.3487 14 10.3487L11.6667 7.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 14.6666V12.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPineTree;
