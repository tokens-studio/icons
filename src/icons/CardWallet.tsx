import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCardWallet = ({
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
			d='M12.667 13.333H3.333A1.333 1.333 0 0 1 2 12V6c0-.736.597-1.333 1.333-1.333h9.334C13.403 4.667 14 5.264 14 6v6c0 .736-.597 1.333-1.333 1.333ZM4.667 4.667V2.4c0-.22.179-.4.4-.4h5.866c.221 0 .4.18.4.4v2.267M6.667 2v2.667M8 2v2.667'
		/>
		<path
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M11 9.333a.333.333 0 1 1 0-.666.333.333 0 0 1 0 .666'
		/>
	</svg>
);
export default SvgCardWallet;
