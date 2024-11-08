import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMultiplePagesXmark = ({
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
			d='m1.914 14.08 1.414-1.413m0 0 1.414-1.415m-1.414 1.415-1.414-1.415m1.414 1.415 1.414 1.414M4.667 1.333H11l3 3v8.334'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M7.333 14.667H11a1 1 0 0 0 1-1V5.832a.4.4 0 0 0-.117-.282l-2.1-2.1a.4.4 0 0 0-.282-.117H3a1 1 0 0 0-1 1v4.334'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M9.333 3.333V5.6c0 .221.18.4.4.4H12'
		/>
	</svg>
);
export default SvgMultiplePagesXmark;
