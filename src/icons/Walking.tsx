import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWalking = ({
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
			d='m8.294 6.085-.94 3.756 3.288 4.226M6.885 12.189l-1.408 1.878'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M5.477 8.902c0-2.63 1.878-2.817 2.817-2.817h.939c.156.782.845 2.441 2.348 2.817M8.667 4.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667'
		/>
	</svg>
);
export default SvgWalking;
