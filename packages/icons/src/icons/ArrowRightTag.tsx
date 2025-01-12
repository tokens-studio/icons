import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgArrowRightTag = ({
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
			d='M4.5 8.00001H11.1667M11.1667 8.00001L9.33333 9.83334M11.1667 8.00001L9.33333 6.16667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33325 10V5.99999C1.33325 4.52723 2.52716 3.33333 3.99992 3.33333H11.9999C13.4727 3.33333 14.6666 4.52723 14.6666 5.99999V10C14.6666 11.4727 13.4727 12.6667 11.9999 12.6667H3.99992C2.52716 12.6667 1.33325 11.4727 1.33325 10Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgArrowRightTag;
