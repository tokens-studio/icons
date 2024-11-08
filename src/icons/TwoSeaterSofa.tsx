import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTwoSeaterSofa = ({
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
			d='M1.333 10.667v2M8 8.667v-4c0-.737.597-1.334 1.333-1.334H12c.736 0 1.333.597 1.333 1.334V6M8 8.667v-4c0-.737-.597-1.334-1.333-1.334H4c-.736 0-1.333.597-1.333 1.334V6'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M13.333 6C12.597 6 12 6.597 12 7.333v1.334H4V7.333a1.333 1.333 0 1 0-2.667 0v4h13.334v-4c0-.736-.597-1.333-1.334-1.333M14.667 10.667v2'
		/>
	</svg>
);
export default SvgTwoSeaterSofa;
