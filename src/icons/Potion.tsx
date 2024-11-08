import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPotion = ({
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
			d='M6.667 2.667h2.666v1.711a.42.42 0 0 0 .275.386c5.683 2.15 4.33 9.903.392 9.903H6c-3.938 0-5.291-7.753.392-9.903a.42.42 0 0 0 .275-.386z'
		/>
		<path stroke='currentColor' strokeWidth={1.5} d='M4 6.667h8' />
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M6 1.333h4'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m7.778 8.667-1.111 2h2.666l-1.11 2'
		/>
	</svg>
);
export default SvgPotion;
