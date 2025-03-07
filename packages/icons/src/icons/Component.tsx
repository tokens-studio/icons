import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgComponent = ({
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
			d='M3.47447 10.0742L1.68314 8.28286C1.52693 8.12659 1.52693 7.87339 1.68314 7.71712L3.47447 5.92581C3.63069 5.7696 3.88395 5.7696 4.04016 5.92581L5.8315 7.71712C5.98771 7.87339 5.98771 8.12659 5.8315 8.28286L4.04016 10.0742C3.88395 10.2304 3.63069 10.2304 3.47447 10.0742Z'
			stroke='currentColor'
		/>
		<path
			d='M7.71712 14.3167L5.92581 12.5254C5.7696 12.3692 5.7696 12.1159 5.92581 11.9597L7.71712 10.1684C7.87338 10.0122 8.12665 10.0122 8.28285 10.1684L10.0742 11.9597C10.2304 12.1159 10.2304 12.3692 10.0742 12.5254L8.28285 14.3167C8.12665 14.473 7.87338 14.473 7.71712 14.3167Z'
			stroke='currentColor'
		/>
		<path
			d='M7.71712 5.83168L5.92581 4.04034C5.7696 3.88413 5.7696 3.63086 5.92581 3.47466L7.71712 1.68332C7.87338 1.52711 8.12665 1.52711 8.28285 1.68332L10.0742 3.47466C10.2304 3.63086 10.2304 3.88413 10.0742 4.04034L8.28285 5.83168C8.12665 5.98788 7.87338 5.98788 7.71712 5.83168Z'
			stroke='currentColor'
		/>
		<path
			d='M11.9598 10.0742L10.1684 8.28286C10.0122 8.12659 10.0122 7.87339 10.1684 7.71712L11.9598 5.92581C12.116 5.7696 12.3693 5.7696 12.5255 5.92581L14.3168 7.71712C14.473 7.87339 14.473 8.12659 14.3168 8.28286L12.5255 10.0742C12.3693 10.2304 12.116 10.2304 11.9598 10.0742Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgComponent;
