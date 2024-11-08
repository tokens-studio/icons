import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBoxIso = ({
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
			fill='currentColor'
			d='m1.797 4.79 6 2.667.406-.914-6-2.667zM8.5 14.333V7h-1v7.333zm-.297-6.876 6-2.667-.406-.914-6 2.667z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M2 11.407V4.593a.4.4 0 0 1 .238-.365l5.6-2.49a.4.4 0 0 1 .324 0l5.6 2.49a.4.4 0 0 1 .238.365v6.814a.4.4 0 0 1-.238.365l-5.6 2.49a.4.4 0 0 1-.324 0l-5.6-2.49A.4.4 0 0 1 2 11.407'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m5 3 5.762 2.561a.4.4 0 0 1 .238.366v2.406'
		/>
	</svg>
);
export default SvgBoxIso;
