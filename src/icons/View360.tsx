import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgView360 = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={16}
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
			strokeWidth={1.5}
			d='M2.667 5.667h1.166m0 0a1.167 1.167 0 1 1 0 2.333H2m1.833-2.333a1.167 1.167 0 1 0 0-2.334H2M14 10c0 2.21-2.686 4-6 4s-6-1.79-6-4M9.333 3.333h-.666a2 2 0 0 0-2 2v1.334m0 0C6.667 7.403 7.264 8 8 8h.333c.737 0 1.334-.597 1.334-1.333v-.334C9.667 5.597 9.07 5 8.333 5H8c-.736 0-1.333.597-1.333 1.333zM11.333 5.667v-1c0-.737.597-1.334 1.334-1.334H13c.736 0 1.333.597 1.333 1.334v2C14.333 7.403 13.736 8 13 8h-.333a1.333 1.333 0 0 1-1.334-1.333z'
		/>
	</svg>
);
export default SvgView360;
