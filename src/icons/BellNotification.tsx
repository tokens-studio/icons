import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBellNotification = ({
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
			d='M12.09 7.333C12.476 10.917 14 12 14 12H2s2-1.422 2-6.4c0-1.132.421-2.217 1.172-3.017S6.939 1.333 8 1.333q.338 0 .667.06M12.667 5.333a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.153 14a1.332 1.332 0 0 1-2.306 0'
		/>
	</svg>
);
export default SvgBellNotification;
