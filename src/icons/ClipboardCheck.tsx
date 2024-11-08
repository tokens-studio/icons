import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgClipboardCheck = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={17}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M5.667 3.667H4c-.736 0-1.333.597-1.333 1.333v9.333c0 .737.597 1.334 1.333 1.334h4M10.333 3.667H12c.736 0 1.333.597 1.333 1.333v6'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M5.333 5.267V4c0-.184.15-.333.334-.333s.336-.15.367-.331c.1-.568.482-1.67 1.966-1.67s1.867 1.102 1.966 1.67c.031.181.183.33.367.33s.334.15.334.334v1.267a.4.4 0 0 1-.4.4H5.733a.4.4 0 0 1-.4-.4Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10.333 14.667 11.667 16 15 12.667'
		/>
	</svg>
);
export default SvgClipboardCheck;
