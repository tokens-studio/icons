import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDns = ({
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
			d='M14.667 8.667V8a6.667 6.667 0 1 0-12 4'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8.667 1.366s2 2.634 2 6.634v.666M7.333 1.366S5.333 4 5.333 8v.666M1.753 10.333h.914M1.753 5.667h12.494M4.667 14.667v-4h.666c.737 0 1.334.597 1.334 1.333v1.333c0 .737-.597 1.334-1.334 1.334zM8.667 14.667v-4l2 4v-4M12.667 14.667H14a1 1 0 1 0 0-2h-.333a1 1 0 1 1 0-2h1'
		/>
	</svg>
);
export default SvgDns;
