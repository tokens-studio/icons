import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBonfire = ({
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
			d='M6 9.333c0 1.074.918 1.334 2.05 1.334 1.927 0 2.564-1.111 1.282-3.334-1.794 2-2.05-1.11-1.794-2C6.768 6.667 6 7.92 6 9.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8 10.667c2.104 0 3.333-1.399 3.333-3.792S8 2 8 2 4.667 4.482 4.667 6.875 5.897 10.667 8 10.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='m2.848 14.047 10.304-2.76M2.848 11.286 8 12.666M13.152 14.047l-2.576-.69'
		/>
	</svg>
);
export default SvgBonfire;
