import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPeerlist = ({
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
			d='M5.914 2h4.172a4 4 0 0 1 3.976 3.558l.14 1.264c.088.783.088 1.573 0 2.356l-.14 1.264A4 4 0 0 1 10.086 14H5.914a4 4 0 0 1-3.976-3.558l-.14-1.264a10.7 10.7 0 0 1 0-2.356l.14-1.264A4 4 0 0 1 5.914 2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6 11.333V8.667m0 0v-4h2.667a2 2 0 1 1 0 4z'
		/>
	</svg>
);
export default SvgPeerlist;
