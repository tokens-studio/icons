import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGym = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
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
			d='M5.933 4.667H4.067a.4.4 0 0 0-.4.4v5.866c0 .221.179.4.4.4h1.866a.4.4 0 0 0 .4-.4V5.067a.4.4 0 0 0-.4-.4M13.933 4.667h-1.866a.4.4 0 0 0-.4.4v5.866c0 .221.179.4.4.4h1.866a.4.4 0 0 0 .4-.4V5.067a.4.4 0 0 0-.4-.4M1.667 9.6V6.4c0-.22.179-.4.4-.4h1.2c.22 0 .4.18.4.4v3.2a.4.4 0 0 1-.4.4h-1.2a.4.4 0 0 1-.4-.4'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M16.333 9.6V6.4a.4.4 0 0 0-.4-.4h-1.2a.4.4 0 0 0-.4.4v3.2c0 .22.18.4.4.4h1.2a.4.4 0 0 0 .4-.4M6.333 8h5.334'
		/>
	</svg>
);
export default SvgGym;
