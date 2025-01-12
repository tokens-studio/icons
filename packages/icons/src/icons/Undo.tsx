import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUndo = ({
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
			d='M3 5.33325C5.66667 5.33325 7.33333 5.33325 10 5.33325C10 5.33325 13.3333 5.33325 13.3333 8.47052C13.3333 11.9999 10 11.9999 10 11.9999C7.71427 11.9999 6.47619 11.9999 4.19047 11.9999'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.00008 7.66667C4.08886 6.75547 3.57797 6.24455 2.66675 5.33333C3.57797 4.42211 4.08886 3.91122 5.00008 3'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgUndo;
