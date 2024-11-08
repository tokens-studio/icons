import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgNetworkLeft = ({
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
			d='M1.333 9.733V13.6c0 .22.18.4.4.4h2.534a.4.4 0 0 0 .4-.4V9.733a.4.4 0 0 0-.4-.4H1.733a.4.4 0 0 0-.4.4ZM11.333 6.067v3.866c0 .221.18.4.4.4h2.534a.4.4 0 0 0 .4-.4V6.067a.4.4 0 0 0-.4-.4h-2.534a.4.4 0 0 0-.4.4ZM1.333 2.4v3.867c0 .22.18.4.4.4h2.534a.4.4 0 0 0 .4-.4V2.4a.4.4 0 0 0-.4-.4H1.733a.4.4 0 0 0-.4.4ZM4.667 11.667H7c.736 0 1.333-.597 1.333-1.334V5.667c0-.737-.597-1.334-1.333-1.334H4.667M8.333 8h3'
		/>
	</svg>
);
export default SvgNetworkLeft;
