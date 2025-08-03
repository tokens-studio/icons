import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLetterSpacingFilled = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 2 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M2 21V3C2 2.44772 2.44772 2 3 2C3.51768 2 3.94379 2.39333 3.99512 2.89746L4 3V21C4 21.5523 3.55228 22 3 22C2.48232 22 2.05621 21.6067 2.00488 21.1025L2 21ZM20 21V3C20 2.44772 20.4477 2 21 2C21.5523 2 22 2.44772 22 3V21C22 21.5523 21.5523 22 21 22C20.4477 22 20 21.5523 20 21ZM11.4971 5.79492C11.8222 5.6792 12.1778 5.6792 12.5029 5.79492L12.6631 5.8623L12.793 5.93652C13.0768 6.12045 13.2352 6.38077 13.3174 6.52539C13.4229 6.71113 13.5312 6.9521 13.6387 7.18848L17.9102 16.5859L17.9482 16.6816C18.1101 17.1617 17.8851 17.6959 17.4141 17.9102C16.9428 18.1244 16.392 17.9427 16.1367 17.5049L16.0898 17.4141L14.5381 14H9.46191L7.91016 17.4141C7.68152 17.9166 7.08862 18.1386 6.58594 17.9102C6.08336 17.6815 5.86135 17.0886 6.08984 16.5859L10.3613 7.18848L10.5225 6.83789C10.5761 6.72507 10.6299 6.61822 10.6826 6.52539C10.7766 6.36003 10.9701 6.04303 11.3369 5.8623L11.4971 5.79492ZM10.3711 12H13.6289L12 8.41504L10.3711 12Z'
			fill='currentColor'
		/>
	</svg>
);
export default SvgLetterSpacingFilled;
