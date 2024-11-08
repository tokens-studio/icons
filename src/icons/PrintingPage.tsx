import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPrintingPage = ({
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
			strokeWidth={1.5}
			d='M11.714 12H13.6a.4.4 0 0 0 .4-.4V7.333a2.667 2.667 0 0 0-2.667-2.666H4.667A2.667 2.667 0 0 0 2 7.333V11.6c0 .22.18.4.4.4h1.886M5.333 4.667V2.4c0-.22.18-.4.4-.4h4.534c.22 0 .4.18.4.4v2.267'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M4.065 13.543 4.285 12l.333-2.323a.4.4 0 0 1 .396-.344h5.972a.4.4 0 0 1 .396.344L11.714 12l.22 1.543a.4.4 0 0 1-.395.457H4.46a.4.4 0 0 1-.396-.457Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m11.333 6.673.007-.007'
		/>
	</svg>
);
export default SvgPrintingPage;
