import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSandals = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M14.6666 4.66667C14.6666 4.66667 15 2 12 2C8.99989 2 9.33329 4.66667 9.33329 4.66667M14.6666 4.66667H9.33329M14.6666 4.66667L14.5238 6.66667M9.33329 4.66667L9.47616 6.66667M14.5238 6.66667L14.1326 12.1425C14.0579 13.1891 13.187 14 12.1378 14H11.8622C10.813 14 9.94202 13.1891 9.86729 12.1425L9.47616 6.66667M14.5238 6.66667H9.47616'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66664 4.66667C6.66664 4.66667 6.99998 2 3.99996 2C0.999909 2 1.33329 4.66667 1.33329 4.66667M6.66664 4.66667H1.33329M6.66664 4.66667L6.52377 6.66667M1.33329 4.66667L1.47615 6.66667M6.52377 6.66667L6.13264 12.1425C6.05788 13.1891 5.187 14 4.13772 14H3.8622C2.81292 14 1.94204 13.1891 1.86728 12.1425L1.47615 6.66667M6.52377 6.66667H1.47615'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSandals;
