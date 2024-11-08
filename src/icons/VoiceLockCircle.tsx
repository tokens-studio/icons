import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgVoiceLockCircle = ({
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
			d='M9.333 14.533q-.646.133-1.333.134a6.667 6.667 0 1 1 6.648-6.164M8 4v8M6 6v4M12 7.333v1.334M4 7.333v1.334M10 4.667v6.666'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M14.111 12.333h.156c.22 0 .4.18.4.4v1.534a.4.4 0 0 1-.4.4h-2.534a.4.4 0 0 1-.4-.4v-1.534a.4.4 0 0 1 .4-.4h.156m2.222 0v-1.166c0-.39-.222-1.167-1.111-1.167s-1.111.778-1.111 1.167v1.166m2.222 0H11.89'
		/>
	</svg>
);
export default SvgVoiceLockCircle;
