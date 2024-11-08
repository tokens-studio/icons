import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBitbucket = ({
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
			d='m13.944 3.116-1.234 9.867a.4.4 0 0 1-.397.35H3.686a.4.4 0 0 1-.396-.35L2.056 3.116a.4.4 0 0 1 .397-.45h11.094a.4.4 0 0 1 .397.45'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m11.167 5.167-.625 5.313a.4.4 0 0 1-.398.353H5.856a.4.4 0 0 1-.397-.353l-.573-4.867a.4.4 0 0 1 .397-.446zm0 0h2.5'
		/>
	</svg>
);
export default SvgBitbucket;
