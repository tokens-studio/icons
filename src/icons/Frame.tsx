import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFrame = ({
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
			strokeMiterlimit={1.5}
			strokeWidth={1.5}
			d='M3.332 1.334H1.333v1.999h2zM3.332 7.001H1.333v2h2zM13.665 3.334v3.668M2.333 3.334v3.668M13.665 9.001v3.668M2.333 9.001v3.668M3.333 13.668H7'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={1.5}
			strokeWidth={1.22}
			d='M3.333 2.336H7'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={1.5}
			strokeWidth={1.5}
			d='M8.999 13.666h3.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={1.5}
			strokeWidth={1.22}
			d='M8.999 2.334h3.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={1.5}
			strokeWidth={1.5}
			d='M3.332 12.667H1.333v2h2zM14.665 1.335h-1.999v1.999h1.999zM8.998 1.333H7v2h2zM14.665 7.002h-1.999V9h1.999zM14.665 12.668h-1.999v1.999h1.999zM8.998 12.667H7v1.999h2z'
		/>
	</svg>
);
export default SvgFrame;
