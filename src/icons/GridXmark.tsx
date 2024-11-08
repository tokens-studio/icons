import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGridXmark = ({
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
			d='m9.914 12.748 1.415-1.415m0 0 1.414-1.414m-1.415 1.414L9.915 9.92m1.415 1.414 1.414 1.415'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M2.667 6.267v-3.2c0-.221.179-.4.4-.4h3.2c.22 0 .4.179.4.4v3.2a.4.4 0 0 1-.4.4h-3.2a.4.4 0 0 1-.4-.4ZM2.667 12.933v-3.2c0-.22.179-.4.4-.4h3.2c.22 0 .4.18.4.4v3.2a.4.4 0 0 1-.4.4h-3.2a.4.4 0 0 1-.4-.4ZM9.333 6.267v-3.2c0-.221.18-.4.4-.4h3.2c.221 0 .4.179.4.4v3.2a.4.4 0 0 1-.4.4h-3.2a.4.4 0 0 1-.4-.4Z'
		/>
	</svg>
);
export default SvgGridXmark;
