import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDroneChargeFull = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={17}
		height={17}
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
			d='m9.5 9.833.167-1.5.284-2.556a.4.4 0 0 0-.398-.444H6.447a.4.4 0 0 0-.398.444l.578 5.2a.4.4 0 0 0 .398.356h.308'
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
			d='M15.333 12.667V14M10 12.667V14M11.333 12.667V14M12.667 12.667V14'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M8.667 14.933v-3.2c0-.22.179-.4.4-.4H13.6c.221 0 .4.18.4.4v3.2a.4.4 0 0 1-.4.4H9.067a.4.4 0 0 1-.4-.4Z'
		/>
	</svg>
);
export default SvgDroneChargeFull;
