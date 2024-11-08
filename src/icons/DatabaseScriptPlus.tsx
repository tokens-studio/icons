import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDatabaseScriptPlus = ({
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
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M14.667 10.333V6.667M4 9.667V5a2 2 0 0 1 2-2h3.333M11.328 3.667h2m0 0h2m-2 0v-2m0 2v2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8 15H4a2.667 2.667 0 1 1 0-5.333h8a2.667 2.667 0 1 0 2.667 2.666v-2'
		/>
	</svg>
);
export default SvgDatabaseScriptPlus;
