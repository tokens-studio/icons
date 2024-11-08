import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTennisBallAlt = ({
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
			d='M13.773 4.667a6.667 6.667 0 1 1-11.547 6.667 6.667 6.667 0 0 1 11.547-6.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M14.307 10.161c-3.324-2.201-5.055-5.2-5.025-8.703M6.718 14.542c-.244-3.98-1.975-6.977-5.025-8.703'
		/>
	</svg>
);
export default SvgTennisBallAlt;
