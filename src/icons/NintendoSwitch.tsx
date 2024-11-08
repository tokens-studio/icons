import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgNintendoSwitch = ({
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
			d='M1.333 11.333V4.667A2.667 2.667 0 0 1 4 2h2.6c.221 0 .4.18.4.4v11.2a.4.4 0 0 1-.4.4H4a2.667 2.667 0 0 1-2.667-2.667Z'
		/>
		<path
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M4.333 5.333a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333M11.667 9.333a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M14.667 11.333V4.667A2.667 2.667 0 0 0 12 2H9.4a.4.4 0 0 0-.4.4v11.2c0 .22.18.4.4.4H12a2.667 2.667 0 0 0 2.667-2.667Z'
		/>
	</svg>
);
export default SvgNintendoSwitch;
