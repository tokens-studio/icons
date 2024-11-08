import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBehance = ({
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
			d='M5.465 7.478c3.38 0 3.38 4.522 0 4.522H1.333V7.478m4.132 0H1.333m4.132 0c3.38 0 3.38-4.145 0-4.145H1.333v4.145M12 6c-1.473 0-2.667 1.343-2.667 3h5.334c0-1.657-1.194-3-2.667-3M9.333 9c0 1.657 1.194 3 2.667 3 1.837 0 2.333-1.333 2.333-1.333M13.667 4h-3.334'
		/>
	</svg>
);
export default SvgBehance;
