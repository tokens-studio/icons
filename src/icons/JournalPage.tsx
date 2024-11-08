import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgJournalPage = ({
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
			d='M4 4h5.333M4 6.667h8M8.667 9.333H12M8.667 12H12M1.333 14.267V1.733c0-.22.18-.4.4-.4h10.435a.4.4 0 0 1 .283.118L14.55 3.55a.4.4 0 0 1 .117.282v10.435a.4.4 0 0 1-.4.4H1.733a.4.4 0 0 1-.4-.4'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M4 12V9.333h2V12zM12 1.333V3.6c0 .22.18.4.4.4h2.267'
		/>
	</svg>
);
export default SvgJournalPage;
