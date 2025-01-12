import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgNumber8Square = ({
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
			d='M2 13.6V2.4C2 2.17909 2.17909 2 2.4 2H13.6C13.8209 2 14 2.17909 14 2.4V13.6C14 13.8209 13.8209 14 13.6 14H2.4C2.17909 14 2 13.8209 2 13.6Z'
			stroke='currentColor'
		/>
		<path
			d='M7.99992 10.6667C7.07945 10.6667 6.33325 10.3333 6.33325 9.33333C6.33325 8.33333 7.07945 8 7.99992 8C8.92039 8 9.66659 8.33333 9.66659 9.33333C9.66659 10.3333 8.92039 10.6667 7.99992 10.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.99992 5.33337C7.07945 5.33337 6.33325 5.66671 6.33325 6.66671C6.33325 7.66671 7.07945 8.00004 7.99992 8.00004C8.92039 8.00004 9.66659 7.66671 9.66659 6.66671C9.66659 5.66671 8.92039 5.33337 7.99992 5.33337Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgNumber8Square;
