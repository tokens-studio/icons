import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDocStar = ({
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
			d='m10.87 11.409.606-1.285a.208.208 0 0 1 .38 0l.607 1.285 1.355.207c.174.027.244.25.118.379l-.981 1 .231 1.412c.03.181-.152.32-.307.234l-1.212-.667-1.212.667c-.156.085-.338-.053-.308-.234l.231-1.412-.98-1c-.126-.128-.057-.352.117-.379z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M13.333 8V3.832a.4.4 0 0 0-.117-.283L11.117 1.45a.4.4 0 0 0-.283-.117H3.067a.4.4 0 0 0-.4.4v12.534c0 .22.179.4.4.4h4.266'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10.667 1.333V3.6c0 .22.179.4.4.4h2.266'
		/>
	</svg>
);
export default SvgDocStar;
