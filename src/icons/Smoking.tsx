import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSmoking = ({
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
			d='M12 12.667v2M12 10.667c0-.667-.667-1.334-2-1.334h-.667a2 2 0 0 1-2-2V5.667C7.333 4.747 8.08 4 9 4h.333M14.667 10.667c0-3-1.334-3.667-2.667-4C13.333 6.333 14.667 6 14.667 4S13 1.333 12 1.333M14.667 12.667v2'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M8.933 12.667h-7.2a.4.4 0 0 0-.4.4v1.2c0 .22.18.4.4.4h7.2a.4.4 0 0 0 .4-.4v-1.2a.4.4 0 0 0-.4-.4Z'
		/>
	</svg>
);
export default SvgSmoking;
