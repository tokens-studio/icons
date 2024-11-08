import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSendDollars = ({
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
			d='M6.667 5.487c-.533-.492-1.471-.834-2.334-.855m0 0c-1.026-.026-1.944.403-1.944 1.573 0 2.154 4.278 1.077 4.278 3.23 0 1.23-1.139 1.757-2.334 1.718m0-6.521V3.333M2 10.153c.501.618 1.433.97 2.333 1m0 0v1.514M8.667 8H14m0 0-2.56-2.667M14 8l-2.56 2.667'
		/>
	</svg>
);
export default SvgSendDollars;
