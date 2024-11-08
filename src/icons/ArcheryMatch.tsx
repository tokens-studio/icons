import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgArcheryMatch = ({
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
			d='m5.74 10.593 8.015-8.014M5.74 10.593H3.855l-1.886 1.885h1.886v1.886l1.886-1.886zm8.014-8.014h-1.886m1.886 0v1.885M10.26 10.593 2.245 2.579m8.013 8.014h1.886l1.886 1.885h-1.886v1.886l-1.886-1.886zM2.246 2.579H4.13m-1.885 0v1.885'
		/>
	</svg>
);
export default SvgArcheryMatch;
