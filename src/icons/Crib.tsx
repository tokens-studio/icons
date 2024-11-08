import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCrib = ({
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
			d='M2 3.333V14'
		/>
		<path
			stroke='currentColor'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M2 10.667h12M2 4.667h12M12 10.667v-6M9.333 10.667v-6M6.667 10.667v-6M4 10.667v-6M2 12.667h12'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M14 3.333V14M14 3.333A.667.667 0 1 0 14 2a.667.667 0 0 0 0 1.333M2 3.333A.667.667 0 1 0 2 2a.667.667 0 0 0 0 1.333'
		/>
	</svg>
);
export default SvgCrib;
