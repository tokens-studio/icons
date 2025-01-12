import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPlanetAlt = ({
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
			d='M8.00008 13.3333C10.9456 13.3333 13.3334 10.9455 13.3334 7.99996C13.3334 5.05444 10.9456 2.66663 8.00008 2.66663C5.05456 2.66663 2.66675 5.05444 2.66675 7.99996C2.66675 10.9455 5.05456 13.3333 8.00008 13.3333Z'
			stroke='currentColor'
		/>
		<path
			d='M13.208 8.65956C14.4168 9.66696 15.0445 10.569 14.7825 11.0943C14.2952 12.0717 10.9125 11.3745 7.22706 9.53696C3.54157 7.69949 0.948969 5.41752 1.4363 4.44009C1.69757 3.91606 2.7911 3.87339 4.31734 4.22974'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgPlanetAlt;
