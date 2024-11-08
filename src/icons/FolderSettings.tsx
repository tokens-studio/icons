import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFolderSettings = ({
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
			d='M1.733 2.667h4.12a.4.4 0 0 1 .26.096L8.22 4.57a.4.4 0 0 0 .26.097h5.786c.22 0 .4.179.4.4v1.866a.4.4 0 0 1-.4.4H1.733a.4.4 0 0 1-.4-.4V3.067c0-.221.18-.4.4-.4M14.667 6.667v2.666'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M1.333 6.667v6.266c0 .221.18.4.4.4h6.934M12.667 14a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667'
		/>
		<path
			stroke='currentColor'
			strokeDasharray='0.3 2'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M12.667 14.667a2 2 0 1 0 0-4 2 2 0 0 0 0 4'
		/>
	</svg>
);
export default SvgFolderSettings;
