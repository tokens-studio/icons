import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPants = ({
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
			d='M8 12.667h2.957a.4.4 0 0 0 .4-.375l.616-9.867A.4.4 0 0 0 11.574 2H4.423a.4.4 0 0 0-.4.422l.623 11.2a.4.4 0 0 0 .399.378H7.6a.4.4 0 0 0 .4-.4V5.333'
		/>
	</svg>
);
export default SvgPants;
