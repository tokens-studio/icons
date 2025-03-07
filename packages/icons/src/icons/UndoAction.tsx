import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUndoAction = ({
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
			d='M3.33325 3.33325V5.33325V7.33325'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.66662 5.33325C8.33332 5.33325 7.33332 5.33325 9.99998 5.33325C9.99998 5.33325 13.3333 5.33325 13.3333 8.47052C13.3333 11.9999 9.99998 11.9999 9.99998 11.9999C7.71425 11.9999 6.47614 11.9999 4.19043 11.9999'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.66659 7.66667C6.75539 6.75547 6.24447 6.24455 5.33325 5.33333C6.24447 4.42211 6.75539 3.91122 7.66659 3'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgUndoAction;
