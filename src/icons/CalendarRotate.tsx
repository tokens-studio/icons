import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCalendarRotate = ({
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
			d='M6.667 14H3.333A1.333 1.333 0 0 1 2 12.667v-6h12m-4-4V1.333m0 1.334V4m0-1.333H7M2 6.667V4c0-.736.597-1.333 1.333-1.333h1.334M4.667 1.333V4M14 6.667V4c0-.736-.597-1.333-1.333-1.333h-.334'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M14.445 11.111c-.413-1.046-1.355-1.778-2.451-1.778-1.173 0-2.169.837-2.53 2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M13.33 11.181h.937a.4.4 0 0 0 .4-.4V9.7M9.556 12.889c.413 1.046 1.355 1.778 2.45 1.778 1.173 0 2.17-.837 2.53-2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10.67 12.819h-.937a.4.4 0 0 0-.4.4V14.3'
		/>
	</svg>
);
export default SvgCalendarRotate;
