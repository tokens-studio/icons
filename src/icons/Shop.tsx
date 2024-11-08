import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgShop = ({
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
			d='M2 6.667v6C2 13.403 2.597 14 3.333 14h9.334c.736 0 1.333-.597 1.333-1.333v-6'
		/>
		<path
			stroke='currentColor'
			strokeMiterlimit={16}
			strokeWidth={1.5}
			d='M9.889 14v-4c0-.736-.597-1.333-1.333-1.333H7.222c-.736 0-1.333.597-1.333 1.333v4'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='m14.546 6.243-1.13-3.953a.4.4 0 0 0-.385-.29h-2.698l.317 3.803c.01.124.078.236.185.3.26.155.768.442 1.165.564.677.208 1.667.133 2.23.064a.38.38 0 0 0 .316-.488Z'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M9.333 6.667c.379-.117.859-.383 1.128-.542a.39.39 0 0 0 .186-.366L10.333 2H5.667l-.314 3.76a.39.39 0 0 0 .186.365c.27.159.75.425 1.128.542.995.306 1.671.306 2.666 0Z'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='m2.584 2.29-1.13 3.953a.38.38 0 0 0 .315.488c.564.069 1.554.144 2.231-.064.397-.122.905-.409 1.165-.564a.39.39 0 0 0 .185-.3L5.667 2H2.968a.4.4 0 0 0-.384.29Z'
		/>
	</svg>
);
export default SvgShop;
