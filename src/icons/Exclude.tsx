import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgExclude = ({
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
			d='M7 10h-.6a.4.4 0 0 0-.4.4v3.2c0 .22.18.4.4.4h7.2a.4.4 0 0 0 .4-.4V6.4a.4.4 0 0 0-.4-.4h-3.2a.4.4 0 0 0-.4.4V7'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M9 10h.6a.4.4 0 0 0 .4-.4V9M6 9v.6a.4.4 0 0 1-.4.4H2.4a.4.4 0 0 1-.4-.4V2.4c0-.22.18-.4.4-.4h7.2c.22 0 .4.18.4.4v3.2a.4.4 0 0 1-.4.4H9'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6 7v-.6c0-.22.18-.4.4-.4H7'
		/>
	</svg>
);
export default SvgExclude;
