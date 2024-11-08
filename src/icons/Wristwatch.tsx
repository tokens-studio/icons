import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWristwatch = ({
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
			d='M10.667 10.981v2.352c0 .737-.597 1.334-1.334 1.334H6.667a1.333 1.333 0 0 1-1.334-1.334v-2.352M5.333 5.018V2.667c0-.737.597-1.334 1.334-1.334h2.666c.737 0 1.334.597 1.334 1.334v2.351'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M12 8a4 4 0 1 0-8 0 4 4 0 0 0 8 0'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M9.333 8H8V6.667'
		/>
	</svg>
);
export default SvgWristwatch;
