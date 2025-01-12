import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgErase = ({
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
			d='M14 14H6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.5926 9.92606L5.64282 4.97632'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.92886 8.4044L8.05712 2.27614C8.57779 1.75545 9.42206 1.75545 9.94272 2.27614L13.2426 5.57597C13.7633 6.09667 13.7633 6.94087 13.2426 7.4616L7.08079 13.6233C6.83966 13.8645 6.51255 14 6.1715 14C5.83044 14 5.50335 13.8645 5.26219 13.6233L1.92886 10.29C1.40816 9.76933 1.40816 8.92513 1.92886 8.4044Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgErase;
