import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHeart = ({
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
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M14.667 5.908a3.97 3.97 0 0 1-1.103 2.754c-1.627 1.687-3.206 3.445-4.894 5.071a.975.975 0 0 1-1.37-.03L2.435 8.662c-1.47-1.524-1.47-3.984 0-5.508a3.72 3.72 0 0 1 5.387 0L8 3.338l.177-.184A3.74 3.74 0 0 1 10.87 2c1.013 0 1.982.416 2.694 1.154a3.97 3.97 0 0 1 1.103 2.754Z'
		/>
	</svg>
);
export default SvgHeart;
