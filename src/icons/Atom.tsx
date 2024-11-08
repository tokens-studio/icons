import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAtom = ({
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
			d='M2.936 9.073C2.343 8.763 2 8.395 2 8c0-1.105 2.686-2 6-2s6 .895 6 2c0 .476-.5.914-1.333 1.257M8 7.34l.007-.007'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M11.255 4c-.003-.682-.175-1.165-.531-1.346-.984-.502-3.002 1.485-4.506 4.438s-1.926 5.753-.942 6.254c.351.18.835.04 1.38-.346'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6.4 2.834c-.44-.257-.829-.33-1.124-.18-.984.501-.563 3.301.942 6.254s3.521 4.94 4.506 4.438c.874-.446.639-2.707-.481-5.278'
		/>
	</svg>
);
export default SvgAtom;
