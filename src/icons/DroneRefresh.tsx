import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDroneRefresh = ({
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
			strokeWidth={1.5}
			d='m9.667 8.333.284-2.556a.4.4 0 0 0-.398-.444H6.447a.4.4 0 0 0-.398.444l.578 5.2a.4.4 0 0 0 .398.356h.308'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={1.5}
			strokeWidth={1.5}
			d='M3 4.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m3 3 3 2.333M3 13l3.333-2.667M13 3l-3 2.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={1.5}
			strokeWidth={1.5}
			d='M3 14.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334M13 4.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M14.444 11.111c-.412-1.046-1.354-1.778-2.45-1.778-1.173 0-2.169.837-2.53 2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M13.33 11.182h.937a.4.4 0 0 0 .4-.4V9.7M9.556 12.889c.412 1.046 1.354 1.778 2.45 1.778 1.173 0 2.169-.837 2.53-2'
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
export default SvgDroneRefresh;
