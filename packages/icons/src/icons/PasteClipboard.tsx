import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPasteClipboard = ({
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
			d='M5.66675 3.66663H4.00008C3.2637 3.66663 2.66675 4.26358 2.66675 4.99996V14.3333C2.66675 15.0697 3.2637 15.6666 4.00008 15.6666H12.0001C12.7365 15.6666 13.3334 15.0697 13.3334 14.3333V4.99996C13.3334 4.26358 12.7365 3.66663 12.0001 3.66663H10.3334'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M5.33325 5.26663V3.99996C5.33325 3.81587 5.48249 3.66663 5.66659 3.66663C5.85068 3.66663 6.00273 3.51732 6.03427 3.33595C6.13304 2.76777 6.51591 1.66663 7.99992 1.66663C9.48392 1.66663 9.86678 2.76777 9.96558 3.33595C9.99712 3.51732 10.1492 3.66663 10.3333 3.66663C10.5173 3.66663 10.6666 3.81587 10.6666 3.99996V5.26663C10.6666 5.48754 10.4875 5.66663 10.2666 5.66663H5.73325C5.51234 5.66663 5.33325 5.48754 5.33325 5.26663Z'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgPasteClipboard;
