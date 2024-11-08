import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFontQuestion = ({
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
			d='m2.313 12.25.71-1.562m0 0L5.86 4.444l2.838 6.244m-5.677 0H8.7m.71 1.562-.71-1.562M10.118 5.863c0-2.484 3.903-2.484 3.903 0 0 1.774-1.774 1.42-1.774 3.548M12.247 12.257l.008-.008'
		/>
	</svg>
);
export default SvgFontQuestion;
