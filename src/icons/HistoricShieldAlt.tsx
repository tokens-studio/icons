import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHistoricShieldAlt = ({
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
			d='m7.821 14.577-3.68-1.84a2.67 2.67 0 0 1-1.474-2.385V1.733c0-.22.179-.4.4-.4h9.866c.221 0 .4.18.4.4v8.619c0 1.01-.57 1.933-1.474 2.385l-3.68 1.84a.4.4 0 0 1-.358 0M8 6.667V1.333M2.667 6.667h10.666'
		/>
	</svg>
);
export default SvgHistoricShieldAlt;
