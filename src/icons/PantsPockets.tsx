import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPantsPockets = ({
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
			strokeWidth={1.5}
			d='M3.357 2.422a.4.4 0 0 1 .4-.422h8.487a.4.4 0 0 1 .4.422l-.623 11.2a.4.4 0 0 1-.4.378H9.69a.4.4 0 0 1-.397-.353l-.895-7.604c-.055-.47-.739-.47-.794 0l-.895 7.604a.4.4 0 0 1-.397.353H4.378a.4.4 0 0 1-.399-.378z'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M3.333 5h1c.737 0 1.334-.597 1.334-1.333V2M12.333 5h-.666a1.333 1.333 0 0 1-1.334-1.333V2'
		/>
	</svg>
);
export default SvgPantsPockets;
