import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgOpenSelectHandGesture = ({
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
			d='M5.333 9.714 4.118 8.557a1.039 1.039 0 0 0-1.474 1.463l3.96 4.225c.253.27.604.422.973.422h3.09c1.6 0 2.666-1.334 2.666-2.667V6.286'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M11.333 6.667v-.381c0-1.524 2-1.524 2 0M9.333 6.667V5.524c0-1.524 2-1.524 2 0v1.142M7.333 6.667V5c0-1.524 2-1.524 2 0v1.667M5.333 9.714v-7.38a1 1 0 0 1 2-.001v4.334'
		/>
	</svg>
);
export default SvgOpenSelectHandGesture;
