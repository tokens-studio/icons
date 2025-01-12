import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgArrowLeftTag = ({
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
			d='M11.1667 8.00001H4.5M4.5 8.00001L6.33333 9.83334M4.5 8.00001L6.33333 6.16667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33337 10V5.99999C1.33337 4.52723 2.52728 3.33333 4.00004 3.33333H12C13.4728 3.33333 14.6667 4.52723 14.6667 5.99999V10C14.6667 11.4727 13.4728 12.6667 12 12.6667H4.00004C2.52728 12.6667 1.33337 11.4727 1.33337 10Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgArrowLeftTag;
