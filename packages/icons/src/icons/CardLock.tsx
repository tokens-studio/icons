import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCardLock = ({
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
			d='M14.6667 6.00001V4.66668C14.6667 3.9303 14.0698 3.33334 13.3334 3.33334H2.66671C1.93033 3.33334 1.33337 3.9303 1.33337 4.66668V11.3333C1.33337 12.0697 1.93033 12.6667 2.66671 12.6667H9.33337M14.6667 6.00001H4.00004M14.6667 6.00001V8.66668'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.1112 12.3333H14.2667C14.4876 12.3333 14.6667 12.5124 14.6667 12.7333V14.2667C14.6667 14.4876 14.4876 14.6667 14.2667 14.6667H11.7334C11.5124 14.6667 11.3334 14.4876 11.3334 14.2667V12.7333C11.3334 12.5124 11.5124 12.3333 11.7334 12.3333H11.8889M14.1112 12.3333V11.1667C14.1112 10.7778 13.8889 10 13 10C12.1112 10 11.8889 10.7778 11.8889 11.1667V12.3333M14.1112 12.3333H11.8889'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCardLock;
