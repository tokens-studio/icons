import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFillColor = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={17}
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
			d='m1.757 6.862 4.714-4.714 5.657 5.657-4.714 4.714c-.52.52-1.365.52-1.886 0l-3.77-3.772a1.333 1.333 0 0 1 0-1.885M5.529 1.205l.942.943'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={1.5}
			strokeWidth={1.5}
			d='M13.333 10s2 1.996 2 3.258a2 2 0 0 1-2 2 2.006 2.006 0 0 1-2-2c.007-1.263 2-3.258 2-3.258'
			clipRule='evenodd'
		/>
	</svg>
);
export default SvgFillColor;
