import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFlower = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
		height={18}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={1.5}
			strokeWidth={1.5}
			d='M9 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.667 7s.666-1.333.666-2.667S9 1.667 9 1.667 7.667 3 7.667 4.333c0 1.334.666 2.667.666 2.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={1.5}
			strokeWidth={1.5}
			d='M7 8.333s-1.333-.666-2.667-.666S1.667 9 1.667 9 3 10.333 4.333 10.333C5.667 10.333 7 9.667 7 9.667M9.667 11s.666 1.333.666 2.667S9 16.333 9 16.333 7.667 15 7.667 13.667c0-1.334.666-2.667.666-2.667M11 8.333s1.333-.666 2.667-.666S16.333 9 16.333 9 15 10.333 13.667 10.333c-1.334 0-2.667-.666-2.667-.666M8.057 7.115S7.586 5.7 6.643 4.758s-2.828-.943-2.828-.943 0 1.885.942 2.828c.943.943 2.357 1.414 2.357 1.414M7.114 9.943s-1.414.471-2.357 1.414-.943 2.829-.943 2.829 1.886 0 2.829-.943 1.414-2.357 1.414-2.357M10.886 9.943s1.414.471 2.357 1.414c.942.943.942 2.829.942 2.829s-1.885 0-2.828-.943-1.414-2.357-1.414-2.357M9.943 7.115s.471-1.415 1.414-2.357 2.828-.943 2.828-.943 0 1.885-.942 2.828c-.943.943-2.357 1.414-2.357 1.414'
		/>
	</svg>
);
export default SvgFlower;
