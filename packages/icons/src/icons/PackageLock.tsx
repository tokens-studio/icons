import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPackageLock = ({
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
			d='M9.33335 13.3333H4.00002C3.26364 13.3333 2.66669 12.7364 2.66669 12V3.99996C2.66669 3.26358 3.26364 2.66663 4.00002 2.66663H12C12.7364 2.66663 13.3333 3.26358 13.3334 3.99995V7.99996'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 5.99996V2.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.1111 12.3333H14.2666C14.4876 12.3333 14.6666 12.5124 14.6666 12.7333V14.2667C14.6666 14.4876 14.4876 14.6667 14.2666 14.6667H11.7333C11.5124 14.6667 11.3333 14.4876 11.3333 14.2667V12.7333C11.3333 12.5124 11.5124 12.3333 11.7333 12.3333H11.8888M14.1111 12.3333V11.1667C14.1111 10.7778 13.8888 10 13 10C12.1111 10 11.8888 10.7778 11.8888 11.1667V12.3333M14.1111 12.3333H11.8888'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPackageLock;
