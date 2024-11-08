import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFootballBall = ({
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
			d='M2.744 9.343a15 15 0 0 0-.07 2.443 1.61 1.61 0 0 0 1.54 1.54c.672.034 1.53.036 2.443-.07M2.744 9.343c.185-1.607.703-3.39 1.956-4.643s3.036-1.77 4.643-1.956m-6.6 6.6 3.914 3.912m0 0c1.607-.185 3.39-.703 4.643-1.956s1.77-3.036 1.956-4.643M9.343 2.744a15 15 0 0 1 2.443-.07 1.61 1.61 0 0 1 1.54 1.54c.034.672.036 1.529-.07 2.443M9.343 2.744l3.913 3.913M6.114 9.886l.943-.943m0 0L6.114 8m.943.943L8 9.886m-.943-.943 1.886-1.886m0 0 .943-.943m-.943.943L8 6.114m.943.943L9.886 8'
		/>
	</svg>
);
export default SvgFootballBall;
