import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBorderRadius = ({
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
			fillRule='evenodd'
			clipRule='evenodd'
			d='M1.79828 9.20131C1.79828 5.47339 4.82036 2.45131 8.54828 2.45131H13.4516H14.2016V3.95131H13.4516H8.54828C5.64879 3.95131 3.29828 6.30182 3.29828 9.20131V12.7947V13.5447H1.79828V12.7947V9.20131ZM6.21483 10.2441C6.21483 8.17306 7.89376 6.49413 9.96483 6.49413L13.4516 6.49413L14.2016 6.49413V7.99413L13.4516 7.99413L9.96483 7.99413C8.72219 7.99413 7.71483 9.00149 7.71483 10.2441L7.71484 12.7947L7.71484 13.5447L6.21484 13.5447L6.21484 12.7947L6.21483 10.2441ZM13.4517 12.0308L14.2017 12.0308L14.2017 10.5308L13.4517 10.5308L10.9024 10.5308C10.4882 10.5308 10.1524 10.8666 10.1524 11.2808L10.1523 12.7986L10.1522 13.5486L11.6522 13.5487L11.6523 12.7987L11.6523 12.0308L13.4517 12.0308Z'
			fill='currentColor'
		/>
	</svg>
);
export default SvgBorderRadius;
