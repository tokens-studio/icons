import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMoneySquare = ({
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
			d='M2 13.6V2.4c0-.22.18-.4.4-.4h11.2c.22 0 .4.18.4.4v11.2a.4.4 0 0 1-.4.4H2.4a.4.4 0 0 1-.4-.4Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10 5.667c-.457-.457-1.26-.775-2-.795m0 0c-.88-.023-1.667.375-1.667 1.461 0 2 3.667 1 3.667 3 0 1.141-.976 1.631-2 1.594m0-6.055V3.667M6 10c.43.573 1.229.9 2 .927m0 0v1.406'
		/>
	</svg>
);
export default SvgMoneySquare;
