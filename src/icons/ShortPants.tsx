import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgShortPants = ({
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
			d='M8 11.2h4.644a.4.4 0 0 0 .397-.353l.907-7.734a.4.4 0 0 0-.398-.446H2.44a.4.4 0 0 0-.399.437l.925 9.867a.4.4 0 0 0 .398.362H7.6a.4.4 0 0 0 .4-.4V8'
		/>
	</svg>
);
export default SvgShortPants;
