import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSettingsProfiles = ({
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
			d='M7.738 1.561a.4.4 0 0 1 .524 0l1.3 1.129a.4.4 0 0 0 .296.096l1.714-.15a.4.4 0 0 1 .425.31l.387 1.676a.4.4 0 0 0 .184.252l1.475.887a.4.4 0 0 1 .162.499l-.672 1.584a.4.4 0 0 0 0 .312l.672 1.584a.4.4 0 0 1-.162.5l-1.475.886a.4.4 0 0 0-.184.253l-.387 1.676a.4.4 0 0 1-.425.308l-1.714-.15a.4.4 0 0 0-.297.097L8.262 14.44a.4.4 0 0 1-.524 0l-1.3-1.129a.4.4 0 0 0-.296-.096l-1.714.15a.4.4 0 0 1-.425-.31l-.387-1.675a.4.4 0 0 0-.184-.253l-1.475-.887a.4.4 0 0 1-.162-.499l.672-1.584a.4.4 0 0 0 0-.312L1.795 6.26a.4.4 0 0 1 .162-.5l1.475-.886a.4.4 0 0 0 .184-.252l.387-1.677a.4.4 0 0 1 .425-.308l1.714.15a.4.4 0 0 0 .297-.097z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6 8.667 7.333 10l3.334-3.333'
		/>
	</svg>
);
export default SvgSettingsProfiles;
