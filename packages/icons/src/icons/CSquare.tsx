import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCSquare = ({
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
			d='M14 2.4V13.6C14 13.8209 13.8209 14 13.6 14H2.4C2.17909 14 2 13.8209 2 13.6V2.4C2 2.17909 2.17909 2 2.4 2H13.6C13.8209 2 14 2.17909 14 2.4Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33335 6.66668V6.53334C9.33335 5.8706 8.79609 5.33334 8.13335 5.33334H7.86669C7.20395 5.33334 6.66669 5.8706 6.66669 6.53334V9.46668C6.66669 10.1294 7.20395 10.6667 7.86669 10.6667H8.13335C8.79609 10.6667 9.33335 10.1294 9.33335 9.46668V9.33334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCSquare;
